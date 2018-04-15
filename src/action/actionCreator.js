import { PUBLIC_KEY } from '../configuration/giphy';
import GphApiClient from 'giphy-js-sdk-core';

const RESOURSE_TYPE = 'gifs';
const giphyApi = GphApiClient(PUBLIC_KEY);

/**
 * Usage: getResponsePromise('trending', { limit: 1 }, 'gifs')
 * @returns {promise} Returns a promise with requested data from the API
 * @param {string} endpoint Api endpoint
 * @param {object} parameters Parameters for the API endpoint
 * @param {string} resourseType Type or resourse needed from the API.
 */
const getResponsePromise = async (endpoint, parameters, resourseType) => {
    /**
     * @todo do a pull request to the SDK library suggesting that the
     * resourse type must be the second argument or change/create the function
     * byIDs and accepts the diferent type of resources to keep the consistencie
     * of the SDK usage.
     */
    const needResourseType = endpoint !== 'gifsByIDs';

    return needResourseType
        ? await giphyApi[endpoint](resourseType, parameters)
        : await giphyApi[endpoint](parameters);
}

/**
 * Usage: actionCreator('search', 'fetch_search')
 * @return {function} getActionPromise
 * @param {string} actionType Name of the action type. 
 * @param {string} endpoint Name of the GIPHY API endpoint.
 */
const actionCreator = (endpoint, type = 'unknown', resourseType = RESOURSE_TYPE, api = giphyApi) => {
    /**
     * @returns {promise} Return a promise that retrives a object with the
     * payload and action type.
     * @param {object} parameters object with the options to be passed to
     * the GIPHY API endpoint call.  
     */
    const getActionPromise = async (parameters) => {
        const payload = await getResponsePromise(endpoint, parameters, resourseType);

        return {
            payload,
            type
        };
    };

    return getActionPromise
}

export default actionCreator;