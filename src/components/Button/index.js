import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
const Button = function(props) {
    return (
        <button
            onClick={() => props.onClick(event, props.searchBy)}
            className={`btn ${props.styleName}`}
            type={props.type || ''}
            data-searchby={props.searchBy}
        >
            {props.text}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    searchBy: PropTypes.string,
    styleName: PropTypes.string,
    onClick: PropTypes.func
};
export default Button;
