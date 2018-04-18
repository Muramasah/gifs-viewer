//Libraries
import React from 'react';
//Componets
import ItemListView from './ItemListView';
import DarkGraySubtitle from './presenter/DarkGraySubtitle';

const GifGallery = ({ title, emptyMessage, gifs, ImageItem, onClickButton }) => {
    return (
        <div className="col-12 text-center">
            <div className="row">
                <div className="col-12 text-center">
                    <DarkGraySubtitle>{title}</DarkGraySubtitle>
                </div>
            </div>
            <div className="row">
                <div className="col-12 text-center">
                    <ItemListView
                        emptyMessage={emptyMessage}
                        gifs={gifs}
                        ImageItem={ImageItem}
                        onClickButton={onClickButton}
                    />
                </div>
            </div>
        </div>
    );
}

export default GifGallery;