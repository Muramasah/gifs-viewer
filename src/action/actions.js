import actionCreator from './actionCreator';

export const FETCH_TRENDING_GIF = 'fetch_trending_gif';
/**
 * Use: fetchTrendingGifs({limit: 10})
 * @returns {promise} Return a promise that retrives a object with the
 * payload and action type.
 * @param {object} options parameters accepted by the trending endpoint
 * @see SDK https://github.com/Giphy/giphy-js-sdk-core#trending-endpoint
 * @see API https://developers.giphy.com/docs/#path--gifs-trending
 */
export const fetchTrendingGifs = actionCreator('trending', FETCH_TRENDING_GIF);

export const FETCH_GIFS_BY_ID = 'fetch_gifs_by_id';
/**
 * Use: fetchGifsByID({"ids": ["feqkVgjJpYtjy", "7rzbxdu0ZEXLy"]})
 * @param {object} options parameters accepted by the trending endpoint
 * @see SDK https://github.com/Giphy/giphy-js-sdk-core#get-gifs-by-ids-endpoint
 * @see API https://developers.giphy.com/docs/#path--gifs
 */
export const fetchGifsByID = actionCreator('gifsByIDs', FETCH_GIFS_BY_ID);

export const FETCH_SEARCH = 'fetch_search';
/**
 * Use: fetchSearchGifs({"q": "cats"})
 * @returns {promise} Return a promise that retrives a object with the
 * payload and action type.
 * @param {object} options parameters accepted by the search endpoint
 * @see SDK https://github.com/Giphy/giphy-js-sdk-core#search-endpoint
 * @see API https://developers.giphy.com/docs/#path--gifs-search
 */
export const fetchSearchGifs = actionCreator('search', FETCH_SEARCH);