import React, { PureComponent } from 'react';
import './image.scss';
const Image = function(props) {
    return <img className='img-responsive' src={props.src} alt={props.alt} />;
};
export default Image;
