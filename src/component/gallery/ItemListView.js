//Libraries
import React from 'react';
//Components
import EmptyGallery from './EmptyGallery';
import NoneColumnGapDiv from './presenter/NoneColumnGapDiv';
//Helpers
import { isObjectEmptyOrUndefined } from '../../helper/object';
import { generateUiID } from '../../helper/dom';

/**
 * If gifs object is no empty, iterates over them and renders each gif component
 * passed as prop by the section component, also generates an interface ID for
 * each gif. If there ara no gifs, shows a message.
 *  
 * @param {*} props
 * @param {string} emptyMessage if there are no gifs to show, shows this message
 * @param {object} gifs gifs to show.
 * @param {component} ImageItem gif type view, passed by the section component.
 * @param {function} onClickButton method that excecutes an app action such as
 * add gif to favorites or remove it.
 * @returns {component} Returns EmptyGallery Component if there are no gifs or
 * a NonColumnGapDiv presenter component if are gifs to show.
 */
const ItemListView = (props) => {
    const { emptyMessage, gifs, ImageItem, onClickButton } = props;

    if (isObjectEmptyOrUndefined(gifs)) {
        return <EmptyGallery emptyMessage={emptyMessage} />
    } else {
        return (
            <NoneColumnGapDiv>
                {Object.keys(gifs).map((id, index) => {
                    const gif = gifs[id];
                    const { slug, url } = gif;
                    const uiID = generateUiID();

                    return <ImageItem
                        gif={gif}
                        key={index}
                        id={id}
                        uiID={uiID}
                        imageUrl={url}
                        slug={slug}
                        onClickButton={onClickButton}
                    />
                })}
            </NoneColumnGapDiv>
        );
    }
}

export default ItemListView;