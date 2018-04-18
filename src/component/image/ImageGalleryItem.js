//Library
import React, { Component } from 'react';
//Component
import LoadingImage from './LoadingImage';
import MiddleInlineDiv from './presenter/MiddleInlineDiv';
import StyledImageItem from './presenter/StyledImageItem';
//Helper
import { showElementByID, hideElementByID } from '../../helper/dom';

/**
 * Component witch represents the item showed by a ItemListView component.
 * uses the state to handle the changes in the src of the gifs and the
 * loading images.
 */
class ImageGalleryItem extends Component {
    /**
     * Constructor method
     * @param {*} props Properties of the component
     * @param {string} props.src Gif url
     * @param {string} props.uiID Interface ID generted bi ItemListView component
     * @param {string} props.alt Alt text for the image, extracted from the gif slug.
     * @param {component} props.ItemButton Component passed by the specific type ImageItem component,
     * such as TrendinImageItem, ResultImageItem and FavoriteImageItem.
     * @param {object} props.gif referense to de gif.
     * @param {function} props.onClickButton Function to execute when the user clicks on the ImageButton
     * component.
     * @returns {undefined} void
     */
    constructor(props) {
        super(props)

        this.state = {
            src: props.src,
            uiID: props.uiID
        }
    }
    /**
     * @see https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
     * @param {object} newProps New properties passed to de component 
     * @param {*} prevState
     * @returns {object} if there are properties that has changed, returns the new state
     * @returns {null} if the properties has not changed, returns null
     */
    static getDerivedStateFromProps({ uiID, src }, prevState) {
        if (src !== prevState.src) {
            hideElementByID(prevState.uiID);
            showElementByID('loading_' + prevState.uiID);

            return { src, uiID }
        } else {
            return null;
        }
    }

    /**
     * When the image is loaded shows the image element and hides the loading one.
     * Also executes a scroll to de bottom of the page.
     * @param {object} event accepts react event object, but is not used.
     * @returns {undefined} void 
     */
    onLoad() {
        const { uiID } = this.state;

        showElementByID(uiID);
        hideElementByID('loading_' + uiID);
        window.scrollTo(0, document.body.scrollHeight);
    }

    /**
     * When an image is clicked opens a new window with the image in full size.
     * @param {object} event accepts react event object, is used to obtain the src
     * of the image.
     * @returns {undefined} void 
     */
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