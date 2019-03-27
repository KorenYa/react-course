import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchForm from './components/SearchForm';
import StatusBar from './components/StatusBar';
import SearchResult from './components/SearchResult';
import MovieDetails from './components/MovieDetails';

import './styles/general.scss';

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

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://react-cdp-api.herokuapp.com/movies?search=' +
                this.state.inputValue +
                '&searchBy=' +
                this.state.searchBy
        )
            .then(response => response.json())
            .then(moviesList => this.setState({ moviesList }));
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
