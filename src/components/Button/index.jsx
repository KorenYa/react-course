// @flow
import React from 'react';
import './button.scss';

type ButtonProps = {
  type: string,
  text: string,
  searchBy: string,
  styleName: string,
  onClick: func,
};

const Button = (props: ButtonProps) => {
  const { onClick, searchBy, styleName, type, text } = props;

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

export default Button;
