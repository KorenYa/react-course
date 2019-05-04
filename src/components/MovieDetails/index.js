import React, { Component } from 'react';
import { connect } from 'react-redux';

import Image from '../Image';
import Button from '../Button';
import SearchResult from '../SearchResult';
import NotFound from '../NotFound';

import { getMovieById } from '../../store/AC';

import './movie-details.scss';

export class MovieDetails extends Component {
    constructor(props) {
        super(props);

        this.handleBackToSearch = this.handleBackToSearch.bind(this);
    }

    handleBackToSearch() {
        const { history, searchQuery } = this.props;
        history.push('/search/' + searchQuery);
    }

    componentDidMount() {
        const { selectedMovie, getMovieById } = this.props;
        const browserfilmId = this.props.match.params.filmId;
        browserfilmId !== selectedMovie.id ? getMovieById(browserfilmId) : null;
    }

    componentDidUpdate(prevProps) {
        const prevFilmId = prevProps.match.params.filmId;
        const filmId = this.props.match.params.filmId;
        const { getMovieById } = this.props;

        if (prevFilmId !== filmId) {
            getMovieById(filmId);
        }
    }

    render() {
        const { selectedMovie } = this.props;
        const movie = selectedMovie;
        const sameGenreMovies = movie ? movie.sameGenreMovies : null;

        return movie.id ? (
            <React.Fragment>
                <div className='movie-details'>
                    <div className='row'>
                        <div className='col-12 text-right'>
                            <Button
                                text={'Back to search'}
                                styleName='btn-lg btn-back'
                                onClick={this.handleBackToSearch}
                            />
                        </div>
                        <div className='col-4'>
                            <Image src={movie.poster_path} alt={movie.title} />
                        </div>
                        <div className='col-8'>
                            <h2 className='movie-details__title'>
                                {movie.title}
                            </h2>
                            <h4 className='movie-details__tagline'>
                                {movie.tagline}
                            </h4>
                            <div>
                                <span className='movie-details__date'>
                                    {movie.release_date.split('-')[0]}
                                </span>
                                <span className='movie-details__runtime'>
                                    {movie.runtime} min
                                </span>
                            </div>
                            <div className='movie-details__overview'>
                                {movie.overview}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='status-bar'>
                    <span>Films by {movie.genres[0]} genre</span>
                </div>
                <SearchResult moviesList={sameGenreMovies} />
            </React.Fragment>
        ) : (
            <NotFound />
        );
    }
}

export default connect(
    state => {
        return {
            moviesList: state.moviesList,
            searchQuery: state.searchQuery,
            selectedMovie: state.selectedMovie
        };
    },
    {
        getMovieById
    }
)(MovieDetails);
