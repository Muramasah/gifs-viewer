//Libraries
import React from 'react';
//Components
import StyledImageItem from './StyledImageItem';
import DislikeButton from './button/DislikeButton';

const FavoriteImageItem = ({ imageUrl, slug, onLoad, onDislike }) => {
    return (
        <div>
            <StyledImageItem
                src={imageUrl}
                alt={slug}
                onLoad={onLoad}
            />
            <DislikeButton onDislike={onDislike} />
        </div>
    );
}

export default FavoriteImageItem;