import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = (props) => {
  const { value, handleChange } = props;
  return (
    <input
      className="input"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};
Input.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};
export default Input;
