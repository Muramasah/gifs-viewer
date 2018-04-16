//Libraries
import React, { Component } from 'react';
//Components
import SearchField from '../input/SearchField';
import SearchResultsGifGallery from '../gallery/SearchResultsGifGallery';

/**
 * SearchSection
 * @param {object} props Properties of the component.
 * @param {integer} props.limit Limit of the results retrieved by the search.
 */
class SearchSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ''
        }
    }

    onSearch(value) {
        this.setState({ searchValue: value });
    }

    render() {
        const { searchValue } = this.state;
        
        console.log({ searchValue });

        return (
            <div>
                <div className="row">
                    <div className="col-12 text-center">
                        <SearchField onSearch={this.onSearch.bind(this)} />
                    </div>
                    <SearchResultsGifGallery title='Search' limit={20} searchString={searchValue} />
                </div>
            </div>
        );
    }
};

export default SearchSection;