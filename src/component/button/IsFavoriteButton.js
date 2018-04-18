import React from 'react';
import FullWidthButton from './presenter/FullWidthButton';

const IsFavoriteButton = () => {
    return (
        <FullWidthButton>
            <i className="fas fa-heart"></i>
        </FullWidthButton>
    );
};

export default IsFavoriteButton;