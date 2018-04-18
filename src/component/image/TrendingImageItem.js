//Libraries
import React from 'react';
//Components
import ImageGalleryItem from './ImageGalleryItem';
import InlineDiv from './presenter/InlineDiv';

const TrendingImageItem = (props) => {
    const { uiID, imageUrl, slug } = props;

    return (
        <InlineDiv>
            <ImageGalleryItem
                uiID={uiID}
                src={imageUrl}
                alt={slug}
            />
        </InlineDiv >
    );
}

export default TrendingImageItem;