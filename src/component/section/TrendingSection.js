//Libraries
import React from 'react';
//Components
import GifGallery from '../gallery/GifGallery';
import TrendingImageItem from '../gallery/image/TrendingImageItem'

/**
 * TrendingGifGallery
 * @param {object} props Properties of the component
 * @param {integer} props.limit Gifs request limit
 */
const TrendingSection = ({ gifs }) => {
    return <GifGallery title='Trending' gifs={gifs} ImageItem={TrendingImageItem} />
};

export default TrendingSection;