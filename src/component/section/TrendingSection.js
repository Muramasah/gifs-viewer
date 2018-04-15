//Libraries
import React from 'react';
//Components
import TrendingGifGallery from '../gallery/TrendingGifGallery';

/**
 * TrendingGifGallery
 * @param {object} props Properties of the component
 * @param {integer} props.limit Gifs request limit
 */
const TrendingSection = ({ limit }) => {
    return <TrendingGifGallery limit={limit} />
};

export default TrendingSection;