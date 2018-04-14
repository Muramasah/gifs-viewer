import React, { Component } from 'react';

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
                <div className="row">
                    <div className="col-12">
                        <header>
                            <h1 className="text-center">GIF Viewer</h1>
                        </header>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
