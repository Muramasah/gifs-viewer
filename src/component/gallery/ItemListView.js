//Libraries
import React from 'react';
//Components
import EmptyGallery from './EmptyGallery';
import StyledItemListView from './StyledItemListView';
//Helpers
import { isArrayEmptyOrUndefined } from '../../helper/array';

const ItemListView = ({ emptyMessage, gifs, ImageItem, onClickButton }) => {
    if (isArrayEmptyOrUndefined(gifs)) {
        return <EmptyGallery emptyMessage={emptyMessage} />
    } else {
        return (
            <StyledItemListView>
                {gifs.map((gif, index) => {
                    const { id, images, slug } = gif;

                    return <ImageItem
                        key={index}
                        id={id}
                        imageUrl={images.downsized_medium.gif_url}
                        slug={slug}
                        onClickButton={onClickButton}
                    />
                })}
            </StyledItemListView>
        );
    }
}

export default ItemListView;