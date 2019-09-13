import React from 'react';
import './Breadcrumbs.sass'
const Breadcrumbs = (props) => {

    return (

        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {props.categories.map((category,idx) => (
                    <li className="breadcrumb-item" key={idx}>{category}</li>
                ))}

            </ol>
        </nav>
    )
}

export default Breadcrumbs;
