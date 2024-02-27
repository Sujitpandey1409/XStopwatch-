import React from 'react';
import './Template.css'
const Template = ({title, src, alt}) => {
    return ( 
        <div className="countryCard">
            <img src={src} alt={alt} />
            <div className="title">{title}</div>   
        </div>
        );
}
 
export default Template;