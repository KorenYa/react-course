import React, { Component } from 'react';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import noop from '../../utils/noop';
import PropTypes from 'prop-types';
import './search-from.css';
const SearchForm = function(props) {
    return (
        <form className='search-form' onSubmit={props.handleSubmit}>
            <div className='search-form__title'>netflixroulette</div>
            <Title title='find your movie' />
            <Input value={props.inputValue} handleChange={props.handleChange} />
            <div className='search-form__btn-wrapper'>
                <span className='search-form__subtitle'>Search by</span>
                <Button
                    type='button'
                    text='Title'
                    searchBy='title'
                    onClick={props.handleFilter}
                    styleName={props.searchBy == 'title' ? 'active' : ''}
                />
                <Button
                    type='button'
                    text='Genre'
                    searchBy='genre'
                    onClick={props.handleFilter}
                    styleName={props.searchBy == 'genre' ? 'active' : ''}
                />
                <Button
                    type='submit'
                    text={'Search'}
                    styleName='btn-lg'
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
    searchBy: PropTypes.string
};
export default SearchForm;
