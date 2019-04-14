import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import SearchForm from '../SearchForm';
import StatusBar from '../StatusBar';
import SearchResult from '../SearchResult';
import MovieDetails from '../MovieDetails';
import { connect } from 'react-redux';
import {
    startMoviesSearch,
    updateSearchQuery,
    updateSearchBy,
    updateSortBy
} from '../../AC';

import '../../styles/general.scss';

class App extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.startMoviesSearch();
    }

    handleChange(event) {
        this.props.updateSearchQuery(event.target.value);
    }

    handleFilter(event, searchBy) {
        event.preventDefault();
        this.props.updateSearchBy(searchBy);
    }

    render() {
        const { searchQuery, searchBy, moviesList } = this.props;

        return (
            <ErrorBoundary>
                <SearchForm
                    inputValue={searchQuery}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    searchBy={searchBy}
                    handleFilter={this.handleFilter}
                />
                <StatusBar total={moviesList.total} />
                <SearchResult moviesList={moviesList} />
                {moviesList.data && (
                    <MovieDetails movie={moviesList.data[0]} />
                ) /*will be moved in separate route*/}
            </ErrorBoundary>
        );
    }
}
export default connect(
    state => {
        return {
            moviesList: state.moviesList,
            searchQuery: state.searchQuery,
            searchBy: state.searchBy,
            sortBy: state.sortBy
        };
    },
    { startMoviesSearch, updateSearchQuery, updateSearchBy, updateSortBy }
)(App);
