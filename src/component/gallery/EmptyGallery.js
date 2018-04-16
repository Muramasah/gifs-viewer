//Libraries
import React from 'react';

const EmptyGallery = ({ emptyMessage }) => {
    return (
        <div className="col-12 text-center">
            <h3>{emptyMessage}</h3>
        </div>
    );
}

export default EmptyGallery;