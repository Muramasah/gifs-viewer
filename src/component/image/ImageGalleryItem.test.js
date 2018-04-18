import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageGalleryItem from './ImageGalleryItem';
import ResultImageButton from '../button/ResultImageButton';

configure({ adapter: new Adapter() });

jest.mock('../../helper/dom'); // this happens automatically with automocking

const showElementByID = require('../../helper/dom').showElementByID;
showElementByID.mockImplementation(() => '');

const hideElementByID = require('../../helper/dom').hideElementByID;
hideElementByID.mockImplementation(() => '');

const gif = {
    id: '3ohc123V1Dr1nf8lcQ',
    slug: 'dance-cute-bear-3ohc123V1Dr1nf8lcQ',
    url: 'https://media1.giphy.com/media/3ohc123V1Dr1nf8lcQ/giphy.gif'
}

test('ImageGalleryItem renders with ResultImageButton without crashing', () => {
    const imageGalleryItem = shallow(
        <ImageGalleryItem
            src={'https://media0.giphy.com/media/11Ldh8hMMCEkta/giphy.gif'}
            uiID={'poU45wTKf1Qut1XirnOq'}
            alt={'alt'}
            ItemButton={ResultImageButton}
            gif={gif}
            onClickButton={() => { }}
        />
    );

    expect(imageGalleryItem).toMatchSnapshot();
});

test('getDerivedStateFromProps', () => {
    const prevState={
        uiID:'3ohc123V1Dr1nf8lcQ',
        src:'https://media0.giphy.com/media/11Ldh8hMMCEkta/giphy.gif'
    }
    const newProps = {
        uiID:'poU45wTKf1Qut1XirnOq',
        src:'https://media0.giphy.com/media/QQHBQZnIGEU8g/giphy.gif'
    };

    const derivatedState = ImageGalleryItem.getDerivedStateFromProps(newProps, prevState)

    expect(derivatedState.uiID).toBe(newProps.uiID);
    expect(derivatedState.src).toBe(newProps.src);
});

test('onLoad', ()=>{
    const imageGalleryItem = shallow(
        <ImageGalleryItem
            src={'https://media0.giphy.com/media/11Ldh8hMMCEkta/giphy.gif'}
            uiID={'poU45wTKf1Qut1XirnOq'}
            alt={'alt'}
            ItemButton={ResultImageButton}
            gif={gif}
            onClickButton={() => { }}
        />
    );

    imageGalleryItem.instance().onLoad();
    expect(imageGalleryItem).toMatchSnapshot();
})