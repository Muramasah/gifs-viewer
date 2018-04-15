//Libraries
import React from 'react';
//Components
import GifGallery from './GifGallery';
//Actions
import { fetchTrendingGifs } from '../../action/actions';

/**
 * TrendingGifGallery
 * @param {object} props Properties of the component
 */
const TrendingGifGallery = props => {
    const { limit } = props;

    /**
     * Usage: getLastTrendingGifsPromise().then(processGifsFunction);
     * @returns {promise} Return a promise that retrives a object with the
     * payload and action type: 'fetch_trending_gif'.
     * @param {integer} limit Maximun nuber of retrieved gifs.
     */
    const getLastTrendingGifsPromise = async () => {
        return await fetchTrendingGifs({ limit })
    }

    return <GifGallery getGifs={getLastTrendingGifsPromise} />
};

export default TrendingGifGallery;