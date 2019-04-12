import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
const Input = function(props) {
    return (
        <input
            className='input'
            type='text'
            value={props.value}
            onChange={props.handleChange}
        />
    );
};
Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default Input;
