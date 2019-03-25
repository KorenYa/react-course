import React, { Component } from 'react';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import noop from '../../utils/noop';
import './search-from.scss';
class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleSubmit(event) {
        this.props.handleSubmit(event);
    }

    handleFilter(event, searchBy) {
        this.props.handleFilter(event, searchBy);
    }

    render() {
        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                <div className='search-form__title'>netflixroulette</div>
                <Title title='find your movie' />
                <Input
                    value={this.props.inputValue}
                    handleChange={this.handleChange}
                />
                <div className='search-form__btn-wrapper'>
                    <span className='search-form__subtitle'>Search by</span>
                    <Button
                        type='button'
                        text='Title'
                        searchBy='title'
                        onClick={this.props.handleFilter}
                        styleName={
                            this.props.searchBy == 'title' ? 'active' : ''
                        }
                    />
                    <Button
                        type='button'
                        text='Genre'
                        searchBy='genre'
                        onClick={this.props.handleFilter}
                        styleName={
                            this.props.searchBy == 'genre' ? 'active' : ''
                        }
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
    }
}
export default SearchForm;
