import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ItemListView from './ItemListView';
import ResultImageItem from '../image/ResultImageItem';
import TrendingImageItem from '../image/TrendingImageItem';
import FavoriteImageItem from '../image/FavoriteImageItem';

configure({ adapter: new Adapter() });

jest.mock('../../helper/dom'); // this happens automatically with automocking
const generateUiID = require('../../helper/dom').generateUiID;
generateUiID.mockImplementation(() => 'poU45wTKf1Qut1XirnOq');

const gifs = {
    '3ohc123V1Dr1nf8lcQ': {
        id: '3ohc123V1Dr1nf8lcQ',
        slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
        url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
    }
}

test('ItemListView renders with ResultImageButton without crashing', () => {
    const itemListView = shallow(<ItemListView
        emptyMessage='empty'
        gifs={gifs}
        ImageItem={ResultImageItem}
        onClickButton={() => { }}
    />);

    expect(itemListView).toMatchSnapshot();
});

test('ItemListView renders with TrendingImageItem and empty gif object without crashing', () => {
    const itemListView = shallow(<ItemListView
        emptyMessage='empty'
        gifs={{}}
        ImageItem={TrendingImageItem}
        onClickButton={() => { }}
    />);

    expect(itemListView).toMatchSnapshot();
});

test('ItemListView renders with FavoriteImageItem without crashing', () => {
    const itemListView = shallow(<ItemListView
        emptyMessage='empty'
        gifs={gifs}
        ImageItem={FavoriteImageItem}
        onClickButton={() => { }}
    />);

    expect(itemListView).toMatchSnapshot();
});