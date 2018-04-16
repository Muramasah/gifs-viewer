
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchField from './SearchField';

configure({ adapter: new Adapter() });

test('SearchField without props renders without crashing', () => {
    shallow(<SearchField />);
});