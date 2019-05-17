import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import noop from '../../utils/noop';
import './search-from.scss';

const SearchForm = (props) => {
  const {
    handleSubmit,
    handleChange,
    handleFilter,
    searchBy,
    inputValue,
  } = props;
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__title">netflixroulette</div>
      <Title title="find your movie" />
      <Input value={inputValue} handleChange={handleChange} />
      <div className="search-form__btn-wrapper">
        <span className="search-form__subtitle">Search by</span>
        <Button
          type="button"
          text="Title"
          searchBy="title"
          onClick={handleFilter}
          styleName={searchBy === 'title' ? 'active' : ''}
        />
        <Button
          type="button"
          text="Genre"
          searchBy="genre"
          onClick={handleFilter}
          styleName={searchBy === 'genre' ? 'active' : ''}
        />
        <Button
          type="submit"
          text="Search"
          styleName="btn-lg"
          style={{ alignSelf: 'flex-end' }}
          onClick={noop}
        />
      </div>
    </form>
  );
};
SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleFilter: PropTypes.func,
  inputValue: PropTypes.string,
  searchBy: PropTypes.string,
};
export default SearchForm;
