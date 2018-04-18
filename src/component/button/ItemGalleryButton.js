import React from 'react';
import IsFavoriteButton from './IsFavoriteButton';
import LikeButton from './LikeButton';

const ItemGalleryButton = ({ gif, onClickButton }) => {
    if (gif.isFavorite) {
        return <IsFavoriteButton />
    } else {
        return <LikeButton gif={gif} onClick={() => { onClickButton(gif) }} />
    }
};

export default ItemGalleryButton;