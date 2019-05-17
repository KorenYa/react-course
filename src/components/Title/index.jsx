import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const Title = (props) => {
  const { title } = props;
  return <h1 className="title">{title}</h1>;
};
Title.propTypes = {
  title: PropTypes.string,
};
Title.defaultProps = {
  title: '',
};
export default Title;
