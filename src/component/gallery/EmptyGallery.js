//Libraries
import React from 'react';
import PeruAdviceText from './presenter/PeruAdviceText';

const EmptyGallery = ({ emptyMessage }) => {
    return (
        <div className="col-12 text-center">
            <PeruAdviceText>{emptyMessage}</PeruAdviceText>
        </div>
    );
}

export default EmptyGallery;