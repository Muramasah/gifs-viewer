import React from 'react';

const DislikeButton = ({ onDislike }) => {
    return (
        <button onClick={onDislike}>
            <span>Dislike</span>
        </button>
    );
};

export default DislikeButton;