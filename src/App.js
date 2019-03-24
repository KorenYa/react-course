import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchForm from './components/SearchForm';
import MovieCard from './components/MovieCard';
import './styles/general.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: 'Hobbit' };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://react-cdp-api.herokuapp.com/movies?search=' +
                this.state.inputValue +
                '&searchBy=title'
        )
            .then(response => response.json())
            .then(data => this.setState({ moviesList }));
    }

    render() {
        return (
            <ErrorBoundary>
                <SearchForm
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <MovieCard />
            </ErrorBoundary>
        );
    }
}
export default App;
