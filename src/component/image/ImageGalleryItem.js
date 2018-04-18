//Library
import React, { Component } from 'react';
//Component
import LoadingImage from './LoadingImage';
import MiddleInlineDiv from './presenter/MiddleInlineDiv';
import StyledImageItem from './presenter/StyledImageItem';
//Helper
import { showElementByID, hideElementByID } from '../../helper/dom';

class ImageGalleryItem extends Component {

    constructor(props) {
        super(props)

        this.state = {
            src: props.src,
            uiID: props.uiID
        }
    }

    static getDerivedStateFromProps({ uiID, src }, prevState) {
        if (src !== prevState.src) {
            hideElementByID(prevState.uiID);
            showElementByID('loading_' + prevState.uiID);

            return { src, uiID }
        } else {
            return null;
        }
    }

    onLoad(event) {
        const { uiID } = this.state;

        showElementByID(uiID);
        hideElementByID('loading_' + uiID);
        window.scrollTo(0, document.body.scrollHeight);
    }

    onClick(event) {
        window.open(
            event.target.src,
            'newwindow',
            'width=600,height=400'
        );
    }

    render() {
        const { alt, ItemButton, gif, onClickButton } = this.props;
        const { uiID, src } = this.state;

        return (
            <MiddleInlineDiv>
                <div id={uiID} style={{ display: 'none' }}>
                    <StyledImageItem
                        src={src}
                        alt={alt}
                        onLoad={this.onLoad.bind(this)}
                        onClick={this.onClick.bind(this)}
                    />
                    {
                        ItemButton
                            ? <ItemButton
                                gif={gif}
                                onClickButton={onClickButton}
                            />
                            : false
                    }
                </div>

                <LoadingImage id={'loading_' + uiID} />
            </MiddleInlineDiv>
        );
    }
}

export default ImageGalleryItem;