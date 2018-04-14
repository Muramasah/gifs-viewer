import React, { Component } from 'react';
import PageHeader from '../component/PageHeader';

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
            </div>
        );
    }
}

export default App;
