//Libraries
import React from 'react';
//Components
import GifGallery from './GifGallery';
//Actions
import { fetchGifsByID } from '../../action/actions';
//Helpers
import { isArrayEmptyOrUndefined } from '../../helper/array'

/**
 * FavoriteGifGallery
 * @returns {component} Gallery component with the specific configuration
 * to show favorite gifs.
 * @param {object} props Properties of the component
 * @param {string} props.title Title of the gallery
 * @param {array} props.favoriteIDs List of IDs from favorite gifs.
 */
const FavoriteGifGallery = props => {
    const { title, favoriteIDs } = props;

    /**
     * Usage: getFavoriteGifsPromise().then(processGifsFunction);
     * @returns {promise} Return a promise that retrives a object with the
     * payload and action type: 'fetch_favorite_gif'.
     */
    const getFavoriteGifsPromise = async () => {
        const ids = favoriteIDs;

        if (isArrayEmptyOrUndefined(ids)) {
            return { payload: false }
        } else {
            return await fetchGifsByID({ ids });
        }
    }

    return <GifGallery title={title} emptyMessage="Add gifs to favorite to see results here" getGifs={getFavoriteGifsPromise} />
};

export default FavoriteGifGallery;