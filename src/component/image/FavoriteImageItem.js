//Libraries
import React from 'react';
//Components
import ImageGalleryItem from './ImageGalleryItem';
import DislikeButton from '../button/DislikeButton';
import InlineDiv from './presenter/InlineDiv';

const FavoriteImageItem = (props) => {
    const { gif, uiID, imageUrl, slug, onClickButton } = props;

    return (
        <InlineDiv>
            <ImageGalleryItem
                uiID={uiID}
                src={imageUrl}
                alt={slug}
                gif={gif}
                onClickButton={onClickButton}
                ItemButton={DislikeButton}
            />
        </InlineDiv>
    );
}

export default FavoriteImageItem;