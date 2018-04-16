import React, { Component } from 'react';
import PageHeader from '../component/PageHeader';
import TrendingSection from '../component/section/TrendingSection';
import FavoriteSection from '../component/section/FavoriteSection';
import SearchSection from '../component/section/SearchSection';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }

    render() {
        const { favorites } = this.state;

        return (
            <div className="container">
                <PageHeader title='GIF Viewer' />
                <TrendingSection limit={10} />
                <FavoriteSection favoriteIDs={favorites} />
                <SearchSection limit={10} />
            </div>
        );
    }
}

export default App;
