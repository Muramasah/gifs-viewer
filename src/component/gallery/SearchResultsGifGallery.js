//Libraries
import React, { Component } from 'react';
//Components
import GifGallery from './GifGallery';
//Actions
import { fetchSearchGifs } from '../../action/actions';
//Helpers
import { isStringEmptyOrUndefined } from '../../helper/string';

/**
 * SearchResultsGifGallery
 * @returns {component} Gallery component with the specific configuration
 * to show search results gifs.
 * @param {object} props Properties of the component
 * @param {string} props.title Title of the gallery
 * @param {array} props.searchString String with the search did by the user.
 * @param {integer} props.limit Limit of the results retrieved by the search.
 */
class SearchResultsGifGallery extends Component {
    /**
     * Usage: getSearchResultGifsPromise().then(processGifsFunction);
     * @returns {promise} Return a promise that retrives a object with the
     * payload and action type: 'fetch_search'.
     */
    async getSearchResultGifsPromise(searchString, limit) {
        if (isStringEmptyOrUndefined(searchString)) {
            return { payload: false }
        } else {
            return await fetchSearchGifs({ q: searchString, limit });
        }
    }

    render() {
        const { title } = this.props;

        return <GifGallery
            title={title}
            emptyMessage="No results, try another search"
            getGifs={() => {
                const { searchString, limit } = this.props;

                return this.getSearchResultGifsPromise(searchString, limit)
            }}
        />
    }
};

export default SearchResultsGifGallery;