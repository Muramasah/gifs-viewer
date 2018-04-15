import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FavoriteSection from './FavoriteSection';

configure({ adapter: new Adapter() });

test('FavoriteSection renders without crashing without props', () => {
    shallow(<FavoriteSection />);
});

test('FavoriteSection renders without crashing with title and favoriteIDs', () => {
    shallow(<FavoriteSection title='Fa-vo-rites!' favoriteIDs={["feqkVgjJpYtjy", "7rzbxdu0ZEXLy"]} />)
});
