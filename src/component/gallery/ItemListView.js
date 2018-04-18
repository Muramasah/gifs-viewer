//Libraries
import React from 'react';
//Components
import EmptyGallery from './EmptyGallery';
import NoneColumnGapDiv from './presenter/NoneColumnGapDiv';
//Helpers
import { isObjectEmptyOrUndefined } from '../../helper/object';
import { generateUiID } from '../../helper/dom';

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