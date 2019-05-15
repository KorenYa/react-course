import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
  const {
    onClick, searchBy, styleName, type, text,
  } = props;

  return (
    <button
      onClick={() => onClick(event, searchBy)}
      className={`btn ${styleName}`}
      type={type || ''}
      data-searchby={searchBy}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  searchBy: PropTypes.string,
  styleName: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
