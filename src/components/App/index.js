import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SearchForm from '../SearchForm';
import StatusBar from '../StatusBar';
import SearchResult from '../SearchResult';
import MovieDetails from '../MovieDetails';
import fetch from 'isomorphic-fetch';

import '../../styles/general.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Adventure',
            moviesList: { total: 0 },
            searchBy: 'genre'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        return fetch(
            'http://react-cdp-api.herokuapp.com/movies?search=' +
                this.state.inputValue +
                '&searchBy=' +
                this.state.searchBy
        )
            .then(response => response.json())
            .then(moviesList => this.setState({ moviesList }));
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleFilter(event, searchBy) {
        event.preventDefault();
        this.setState({ searchBy: searchBy });
    }

    render() {
        return (
            <ErrorBoundary>
                <SearchForm
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    searchBy={this.state.searchBy}
                    handleFilter={this.handleFilter}
                />
                <StatusBar total={this.state.moviesList.total} />
                <SearchResult moviesList={this.state.moviesList} />
                {this.state.moviesList.data && (
                    <MovieDetails movie={this.state.moviesList.data[0]} />
                ) /*will be moved in separate route*/}
            </ErrorBoundary>
        );
    }
}
export default App;
