import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteGifGallery from './FavoriteGifGallery';

configure({ adapter: new Adapter() });

test('FavoriteGifGallery renders without crashing without props', () => {
    shallow(<FavoriteGifGallery />);
});

test('FavoriteGifGallery renders without crashing with title, emptyMessage and favoriteIDs', () => {
    shallow(
        <FavoriteGifGallery
            title='Fa-vo-rites!'
            emptyMessage='Add favorites'
            favoriteIDs={["feqkVgjJpYtjy", "7rzbxdu0ZEXLy"]}
        />
    );
});