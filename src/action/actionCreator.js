import GphApiClient from 'giphy-js-sdk-core';
import { PUBLIC_KEY } from '../configuration/giphy';
import { mapResultGifsToObject } from '../helper/object';

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
    return await giphyApi[endpoint](resourseType, parameters)
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
        const response = await getResponsePromise(endpoint, parameters, resourseType);
        const payload = mapResultGifsToObject(response);

        return {
            payload,
            type
        };
    };

    return getActionPromise
}

export default actionCreator;