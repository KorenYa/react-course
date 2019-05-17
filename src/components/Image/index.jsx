import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';

const Image = (props) => {
  const { src, alt } = props;
  return <img className="img-responsive" src={src} alt={alt} />;
};
Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
export default Image;
