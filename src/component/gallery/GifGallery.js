//Libraries
import React, { Component } from 'react';
import styled from 'styled-components';
//Helpers
import { isComponentLoading, setLoadedState } from '../../helper/component';

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
        this.props
            .getGifs()
            .then(this.loadGifs.bind(this))
            .catch(console.error);
    }

    loadGifs({ payload }) {
        const gifs = payload.data;

        setLoadedState(this, { gifs });
    }

    loadingView() {
        return (
            <div />
        );
    }

    gifItemView(gif, index) {
        /*<div key={index} className="col-6 col-xs-5 col-sm-4 col-md-3">*/
        /*</div>*/
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

    gifItemListView(gifs) {
        if (gifs) {
            return gifs.map(this.gifItemView);
        }
    }

    galleryView() {
        return (
            <div className="col-12 text-center">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2>Trending</h2>
                    </div>
                </div>
                <div className="row">
                    <div style={{
                        lineHeight: '0',
                        //WebkitColumCount: '5',
                        WebkitColumnGap: '0px',
                        //MozColumnCount: '5',
                        MozColumnGap: '0px',
                        //columnCount: '5',
                        columnGap: '0px'
                    }}>
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