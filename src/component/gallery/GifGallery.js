//Libraries
import React, { Component } from 'react';
import styled from 'styled-components';
//Helpers
import { isComponentLoading, setLoadedState } from '../../helper/component';
import { isArrayEmptyOrUndefined } from '../../helper/array';

const StyledImageItem = styled.img`
    margin: 0.2rem;
    width: auto;
    max-width: 100%;
    height: 7rem;
    object-fit: cover;
`;

const GifGalleryImageItem = ({ onLoad, imageUrl, slug }) => {
    return (
        <StyledImageItem onLoad={event => onLoad} src={imageUrl} alt={slug} />
    );
}

class GifGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 'loading',
            gifs: []
        }
    }

    componentDidMount() {
        this.updateViewData();
    }

    componentWillReceiveProps({ getGifs }) {
        if (getGifs !== this.props.getGifs) {
            this.updateViewData(getGifs);
        }
    }

    updateViewData(newGetGifs) {
        const getGifs = newGetGifs || this.props.getGifs

        getGifs()
            .then(this.loadGifs.bind(this))
            .catch(console.error);
    }

    loadGifs({ payload }) {
        if (payload) {
            const gifs = payload.data || [];

            setLoadedState(this, { gifs });
        }
    }

    loadingView() {
        return (
            <div />
        );
    }

    gifItemView(gif, index) {
        return (
            <GifGalleryImageItem
                key={index}
                imageUrl={gif.images.downsized_medium.gif_url}
                slug={gif.slug}
                onLoad={(event => {
                    console.log({ event });
                })}
            />
        );
    }

    emptyGalleryView() {
        const { emptyMessage } = this.props;

        if (emptyMessage) {
            return (
                <div className="col-12 text-center">
                    <h3>{emptyMessage}</h3>
                </div>
            );
        }
    }

    gifItemListView(gifs) {
        if (isArrayEmptyOrUndefined(gifs)) {
            return this.emptyGalleryView();
        } else {
            return (
                <div
                    style={{
                        lineHeight: '0',
                        //WebkitColumCount: '5',
                        WebkitColumnGap: '0px',
                        //MozColumnCount: '5',
                        MozColumnGap: '0px',
                        //columnCount: '5',
                        columnGap: '0px'
                    }}>
                    {gifs.map(this.gifItemView)}
                </div>
            );
        }
    }

    galleryView() {
        return (
            <div className="col-12 text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        {this.gifItemListView(this.state.gifs)}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (isComponentLoading(this.state.status)) {
            return this.loadingView();
        } else {
            return this.galleryView();
        }
    }
}

export default GifGallery;