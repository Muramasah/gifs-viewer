//Libraries
import React, { Component } from 'react';
//Components
import PageHeader from '../section/PageHeader';
import TrendingSection from '../section/TrendingSection';
import FavoriteSection from '../section/FavoriteSection';
import SearchSection from '../section/SearchSection';
//Actions
import { fetchLastTreindGifs, fetchLastSearchGifs } from '../../action/actions';

/**
 * Main component, represents the application
 */
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            trending: {},
            favorites: {},
            results: {},
            searchValue: ''
        }
    }
    /**
     * When the component mount fetches the last 10 trending gifs
     * @returns {promise} returns a promise to be testeable.
     */
    componentDidMount() {
        return fetchLastTreindGifs(10)
            .then(({ payload: { gifs } }) => {
                this.setState({ trending: gifs });
            })
            .catch(console.error);
    }
    /**
     * Retrieves the las 20 gifs that matches with the string passed
     * add a isFavorite flag to each result if the same gif is in the
     * favorite state.
     * @param {string} searchValue Search string to look for gifs
     * @returns {promise} Returns a promise to be testeable
     */
    onChangeSearchValue(searchValue) {
        return fetchLastSearchGifs(searchValue, 20)
            .then(({ payload: { gifs } }) => {
                const gifsWithFavorite = this.addFavoriteFlagToGifs(gifs);

                this.setState({ results: gifsWithFavorite });
            })
            .catch(console.error);
    }

    /**
     * Adds a isFavorite flag to each gif if the same gif is in the
     * favorite state.
     * @param {object} gifs object which contains the gifs retrieved
     * @returns {object} the modified gifs object.
     */
    addFavoriteFlagToGifs(gifs) {
        const { favorites } = this.state;

        Object.keys(gifs).forEach((id, index) => {
            const favoriteGif = favorites[id];

            if (favoriteGif) {
                gifs[id].isFavorite = true;
            }
        });

        return gifs;
    }

    /**
     * Add a isFavorite flag to a gif and changes the favorite state.
     * @param {object} gif
     * @returns {undefined} void
     */
    addGifToFavorites(gif) {
        const { favorites } = this.state

        gif.isFavorite = true;
        favorites[gif.id] = gif;

        this.setState({ favorites });
    }

    /**
     * Remove the isFavorite flag to a result gif related with the
     * favorite gif and changes the favorite state.
     * @param {*} gif
     * @returns {undefined} void 
     */
    removeGifFromFavorites(gif) {
        let { favorites, results } = this.state;
        const resultGif = results[gif.id];

        if (resultGif) {
            resultGif.isFavorite = false;
        }

        delete favorites[gif.id];
        this.setState({ favorites });
    }

    render() {
        const { trending, favorites, results } = this.state;

        return (
            <div className="container">
                <PageHeader title='GIF Viewer' />
                <TrendingSection gifs={trending} />
                <FavoriteSection gifs={favorites}
                    onDislike={this.removeGifFromFavorites.bind(this)}
                />
                <SearchSection gifs={results} onLike={this.addGifToFavorites.bind(this)}
                    onChangeSearchValue={this.onChangeSearchValue.bind(this)}
                />
            </div>
        );
    }
}

export default App;
