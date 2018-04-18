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

export const fetchLastTreindGifs = async (limit) => {
    return await fetchTrendingGifs({ limit })
}

export const FETCH_SEARCH = 'fetch_search';
/**
 * Use: fetchSearchGifs({"q": "cats", limit: 20})
 * @returns {promise} Return a promise that retrives a object with the
 * payload and action type.
 * @param {object} options parameters accepted by the search endpoint
 * @see SDK https://github.com/Giphy/giphy-js-sdk-core#search-endpoint
 * @see API https://developers.giphy.com/docs/#path--gifs-search
 */
export const fetchSearchGifs = actionCreator('search', FETCH_SEARCH);

export const fetchLastSearchGifs = async (searchString, limit) => {
    return await fetchSearchGifs({ limit, q: searchString })
}