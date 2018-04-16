//Libraries
import React from 'react';
//Components
import StyledImageItem from './StyledImageItem';
import ResultImageButton from './button/ResultImageButton';

const ResultImageItem = ({ imageUrl, slug, isFavorite, onLoad, onClickImage, onLike }) => {
    return (
        <div>
            <StyledImageItem
                src={imageUrl}
                alt={slug}
                onLoad={onLoad}
                onClick={onClickImage}
            />
            <ResultImageButton
                isFavorite={isFavorite}
                onLike={onLike}
            />
        </div>
    );
}

export default ResultImageItem;