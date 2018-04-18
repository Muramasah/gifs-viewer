import React from 'react';
import IsFavoriteButton from './IsFavoriteButton';
import LikeButton from './LikeButton';

const ResultImageButton = ({ gif, onClickButton }) => {
    if (gif.isFavorite) {
        return <IsFavoriteButton />
    } else {
        return <LikeButton gif={gif} onClickButton={() => { onClickButton(gif) }} />
    }
}

export default ResultImageButton;