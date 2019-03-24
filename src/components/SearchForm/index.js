import React, { Component } from 'react';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import './search-from.scss';
class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    handleSubmit(event) {
        this.props.handleSubmit(event);
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
                    <Button text={'Title'} />
                    <Button text={'Genre'} />
                    <Button
                        type='submit'
                        text={'Search'}
                        styleName='btn-lg'
                        style={{ alignSelf: 'flex-end' }}
                    />
                </div>
            </form>
        );
    }
}
export default SearchForm;
