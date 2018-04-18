import React from 'react';
import FullWidthButton from './presenter/FullWidthButton';

const LikeButton = ({ gif, onClickButton }) => {
    return (
        <FullWidthButton gif={gif} onClick={() => { onClickButton(gif) }}>
            <span>Like</span>
        </FullWidthButton>
    );
};

export default LikeButton;