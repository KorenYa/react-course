import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';
const Image = function(props) {
    return <img className='img-responsive' src={props.src} alt={props.alt} />;
};
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
};
export default Image;
