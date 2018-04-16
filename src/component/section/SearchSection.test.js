import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchSection from './SearchSection';

configure({ adapter: new Adapter() });

test('FavoriteSection renders without crashing without props', () => {
    shallow(<SearchSection />);
});