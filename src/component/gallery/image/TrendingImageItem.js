//Libraries
import React from 'react';
//Components
import StyledImageItem from './StyledImageItem';
import IsFavoriteButton from './button/IsFavoriteButton';

const TrendingImageItem = ({ imageUrl, slug, onLoad }) => {
    return (
        <div>
            <StyledImageItem onLoad={event => onLoad} src={imageUrl} alt={slug} />
            <IsFavoriteButton />
        </div>
    );
}

export default TrendingImageItem;