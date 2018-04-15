//Libraries
import React from 'react';
//Components
import FavoriteGifGallery from '../gallery/FavoriteGifGallery';

/**
 * TrendingGifGallery
 * @param {object} props Properties of the component.
 * @param {array} props.favoriteIDs IDs from the favorite gifs.
 */
const FavoriteSection = ({ favoriteIDs = [] }) => {
    return <FavoriteGifGallery title='Favorites' favoriteIDs={favoriteIDs} />
};

export default FavoriteSection;