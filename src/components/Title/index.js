import React from 'react';
import PropTypes from 'prop-types';
import './title.css';
const Title = function(props) {
    return <h1 className='title'>{props.title}</h1>;
};
Title.propTypes = {
    title: PropTypes.string
};
export default Title;
