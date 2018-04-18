//Libraries
import React, { Component } from 'react';
//Components
import PageHeader from '../section/PageHeader';
import TrendingSection from '../section/TrendingSection';
import FavoriteSection from '../section/FavoriteSection';
import SearchSection from '../section/SearchSection';
//Actions
import { fetchLastTreindGifs, fetchLastSearchGifs } from '../../action/actions';
//Helpers
import { isArrayEmptyOrUndefined } from '../../helper/array';

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

    componentDidMount() {
        fetchLastTreindGifs(10)
            .then(({ payload: { gifs } }) => {
                this.setState({ trending: gifs });
            })
            .catch(console.error);
    }

    addFavoriteFlag(gif) {
        const { favorites } = this.state;
        if (isArrayEmptyOrUndefined(favorites)) {
            gif.isFavorite = false;
        } else {
            favorites.forEach(favoriteGif => {
                gif.isFavorite = favoriteGif.id === gif.id;
            });
        }

        return gif
    }

    onDislike(gif) {
        let { favorites, results } = this.state;
        if (results[gif.id]) {
            results[gif.id].isFavorite = false;
        }
        gif.isFavorite = false;
        delete favorites[gif.id];

        this.setState({ favorites });
    }

    onLike(gif) {
        const { favorites } = this.state

        gif.isFavorite = true;
        favorites[gif.id] = gif;

        this.setState({ favorites });
    }

    onChangeSearchValue(searchValue) {
        fetchLastSearchGifs(searchValue, 10)
            .then(({ payload: { gifs } }) => {
                const { favorites } = this.state;

                Object.keys(gifs).forEach((id, index) => {
                    const favoriteGif = favorites[id];

                    if (favoriteGif) {
                        gifs[id].isFavorite = true
                    }
                })

                this.setState({ results: gifs });
            })
            .catch(console.error);
    }

    render() {
        const { trending, favorites, results } = this.state;

        return (
            <div className="container">
                <PageHeader title='GIF Viewer' />
                <TrendingSection gifs={trending} />
                <FavoriteSection
                    gifs={favorites}
                    onDislike={this.onDislike.bind(this)}
                />
                <SearchSection
                    gifs={results}
                    onLike={this.onLike.bind(this)}
                    onChangeSearchValue={this.onChangeSearchValue.bind(this)}
                />
            </div>
        );
    }
}

export default App;
