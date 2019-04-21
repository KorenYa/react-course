import React, { Component } from 'react';
import ErrorBoundary from '../ErrorBoundary';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import SearchForm from '../SearchForm';
import StatusBar from '../StatusBar';
import SearchResult from '../SearchResult';
import MovieDetails from '../MovieDetails';

import {
    startMoviesSearch,
    updateSearchQuery,
    updateSearchBy,
    updateSortBy,
    clearMoviesList
} from '../../store/AC';

import '../../styles/general.scss';

export class App extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSortBy = this.handleSortBy.bind(this);
    }

    componentDidMount() {
        const {
            searchQuery,
            updateSearchQuery,
            startMoviesSearch,
            clearMoviesList
        } = this.props;
        const pathname = this.props.location.pathname;
        const browserSearchQuery = pathname.split('/search/')[1];

        //Scenarios how to handle persisted store results and first load based on path
        //1) if user opens homepage '/' => purge store and show 'No results' page
        if (pathname && pathname === '/') {
            updateSearchQuery('');
            clearMoviesList();
        }

        //2) if user opens search page'/search/{browserSearchQuery}' with new request => override store with new response
        if (browserSearchQuery && browserSearchQuery !== searchQuery) {
            updateSearchQuery(browserSearchQuery);
            startMoviesSearch();
        }

        //3) if user opens search page'/search/{browserSearchQuery}' with already handled request => show response from store
        //auto resolved
    }

    handleSubmit(event) {
        event.preventDefault();
        const { startMoviesSearch, history, searchQuery } = this.props;
        startMoviesSearch();
        history.push('/search/' + searchQuery);
    }

    handleChange(event) {
        this.props.updateSearchQuery(event.target.value);
    }

    handleFilter(event, searchBy) {
        event.preventDefault();
        this.props.updateSearchBy(searchBy);
    }

    handleSortBy(sortBy) {
        this.props.updateSortBy(sortBy);
        this.props.startMoviesSearch();
    }

    render() {
        const { searchQuery, searchBy, moviesList, sortBy } = this.props;

        const Homepage = () => {
            return (
                <React.Fragment>
                    <SearchForm
                        inputValue={searchQuery}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        searchBy={searchBy}
                        handleFilter={this.handleFilter}
                    />
                    <StatusBar
                        total={moviesList.total}
                        sortBy={sortBy}
                        handleSortBy={this.handleSortBy}
                    />
                    <SearchResult moviesList={moviesList} />
                </React.Fragment>
            );
        };

        const NotFound = () => {
            return (
                <div className='not-found-page'>
                    <span>404 - Not found</span>
                </div>
            );
        };

        return (
            <ErrorBoundary>
                <Switch>
                    <Route exact path='/' render={Homepage} />
                    <Route
                        path='/search/:browserSearchQuery'
                        render={Homepage}
                    />
                    <Route path='/film/:id' component={MovieDetails} />
                    <Route path='*' component={NotFound} />
                </Switch>
            </ErrorBoundary>
        );
    }
}
export default withRouter(
    connect(
        state => {
            return {
                moviesList: state.moviesList,
                searchQuery: state.searchQuery,
                searchBy: state.searchBy,
                sortBy: state.sortBy
            };
        },
        {
            startMoviesSearch,
            updateSearchQuery,
            updateSearchBy,
            updateSortBy,
            clearMoviesList
        }
    )(App)
);
