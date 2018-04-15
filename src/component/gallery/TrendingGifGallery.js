//Libraries
import React from 'react';
//Components
import GifGallery from './GifGallery';
//Actions
import { fetchTrendingGifs } from '../../action/actions';

/**
 * TrendingGifGallery
 * @param {object} props Properties of the component
 * @param {integer} limit Maximun number of requested gifs.
 */
const TrendingGifGallery = props => {
    const { title, limit } = props;

    /**
     * Usage: getLastTrendingGifsPromise().then(processGifsFunction);
     * @returns {promise} Return a promise that retrives a object with the
     * payload and action type: 'fetch_trending_gif'.
     */
    const getLastTrendingGifsPromise = async () => {
        return await fetchTrendingGifs({ limit })
    }

    return <GifGallery title={title} getGifs={getLastTrendingGifsPromise} />
};

export default TrendingGifGallery;