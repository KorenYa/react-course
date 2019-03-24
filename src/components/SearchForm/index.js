import React, { Component } from 'react';
import Title from '../Title';
import Input from '../Input';
import Button from '../Button';
import './search-from.scss';
class SearchForm extends Component {
    render() {
        return (
            <form className='search-form'>
                <div className='search-form__title'>netflixroulette</div>
                <Title title='find your movie' />
                <Input />
                <div className='search-form__btn-wrapper'>
                    <span className='search-form__subtitle'>Search by</span>
                    <Button text={'Title'} />
                    <Button text={'Genre'} />
                    <Button
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
