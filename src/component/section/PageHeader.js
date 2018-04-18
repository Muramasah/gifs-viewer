import React from 'react';
import WhiteTitle from './presenter/WhiteTitle';

const PageHeader = props => {
    const { title } = props;

    return (
        <div className="row">
            <div className="col-12">
                <header>
                    <WhiteTitle className="text-center">{title}</WhiteTitle>
                </header>
            </div>
        </div>
    );
};

export default PageHeader;