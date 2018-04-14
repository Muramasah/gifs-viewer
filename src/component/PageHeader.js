import React from 'react';

const PageHeader = props => {
    return (
        <div className="row">
            <div className="col-12">
                <header>
                    <h1 className="text-center">{props.title}</h1>
                </header>
            </div>
        </div>
    );
};

export default PageHeader;