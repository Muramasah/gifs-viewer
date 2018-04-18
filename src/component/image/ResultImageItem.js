//Libraries
import React from 'react';
//Components
import ImageGalleryItem from './ImageGalleryItem';
import ResultImageButton from '../button/ResultImageButton';
import InlineDiv from './presenter/InlineDiv';

const ResultImageItem = (props) => {
    const { gif, uiID, imageUrl, slug, onClickButton } = props;

    return (
        <InlineDiv>
            <ImageGalleryItem
                uiID={uiID}
                src={imageUrl}
                alt={slug}
                gif={gif}
                onClickButton={onClickButton}
                ItemButton={ResultImageButton}
            />
        </InlineDiv>
    );
}

export default ResultImageItem;