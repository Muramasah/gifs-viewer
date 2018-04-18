import React from 'react';
import FullWidthButton from './presenter/FullWidthButton';

const DislikeButton = (props) => {
    const { gif, onClickButton } = props;

    return (
        <FullWidthButton gif={gif} onClick={() => { onClickButton(gif) }}>
            <span>Dislike</span>
        </FullWidthButton >
    );
};

export default DislikeButton;