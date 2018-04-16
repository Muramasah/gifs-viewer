//Libraries
import React from 'react';
//Components
import GifGallery from '../gallery/GifGallery';
import FavoriteImageItem from '../gallery/image/FavoriteImageItem'

/**
 * FavoriteSection
 * @param {object} props Properties of the component.
 * @param {array} props.gifs Favorite gifs.
 */
const FavoriteSection = ({ gifs, onDislike }) => {
    return <GifGallery
        title='Favorites'
        emptyMessage="Add gifs to favorite to see results here"
        ImageItem={FavoriteImageItem}
        onClickButton={onDislike}
        gifs={gifs}
    />
};

export default FavoriteSection;