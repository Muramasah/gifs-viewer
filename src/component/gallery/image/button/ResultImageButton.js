import React from 'react';
import IsFavoriteButton from './IsFavoriteButton';
import LikeButton from './LikeButton';

const ResultImageButton = ({ isFavorite, onLike }) => {
    if (isFavorite) {
        return <IsFavoriteButton />
    } else {
        return <LikeButton onClick={onLike} />
    }
}

export default ResultImageButton;