import React, { Component } from 'react';
import PageHeader from '../component/PageHeader';
import TrendingSection from '../component/section/TrendingSection'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: []
        }
    }

    render() {
        return (
            <div className="container">
                <PageHeader title='GIF Viewer' />
                <TrendingSection limit={10} />
            </div>
        );
    }
}

export default App;
