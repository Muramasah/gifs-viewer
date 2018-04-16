//Libraries
import React from 'react';
//Components
import SearchField from '../input/SearchField';
import GifGallery from '../gallery/GifGallery';
import ResultImageButton from '../gallery/image/ResultImageItem';

/**
 * SearchSection
 * @param {object} props Properties of the component.
 */
const SearchSection = ({ gifs, onLike, onChangeSearchValue }) => {
    return (
        <div>
            <div className="row">
                <div className="col-12 text-center">
                    <SearchField onSearch={onChangeSearchValue} />
                </div>
                <GifGallery
                    title='Search'
                    emptyMessage="Write in the field to see results here"
                    ImageItem={ResultImageButton}
                    onClickButton={onLike}
                    gifs={gifs}
                />
            </div>
        </div>
    );
};

export default SearchSection;