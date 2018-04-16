import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchResultsGifGallery from './SearchResultsGifGallery';

configure({ adapter: new Adapter() });

test('SearchResultsGifGallery renders without crashing without props', () => {
    shallow(<SearchResultsGifGallery />);
});

test('SearchResultsGifGallery renders without crashing with title, emptyMessage and searchString', () => {
    shallow(
        <SearchResultsGifGallery
            title='Search!'
            emptyMessage='No results, try with other worlds more popular'
            searchString='michel'
        />
    );
});