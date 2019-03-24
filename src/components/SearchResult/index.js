import React, { Component } from 'react';
import MovieCard from '../MovieCard';
import './search-result.scss';
class SearchResult extends Component {
    render() {
        const moviesList = this.props.moviesList;

        const searchHits = moviesList.total > 0 && (
            <div className='search-result'>
                {moviesList.data.map(movie => {
                    return (
                        <MovieCard
                            key={movie.id}
                            date={movie.release_date.split('-')[0]}
                            genre={movie.genres[0]}
                            title={movie.title}
                            poster={movie.poster_path}
                        />
                    );
                })}
            </div>
        );

        const noHits = (
            <div className='search-result__no-hits'>No films found</div>
        );

        return moviesList.total > 0 ? searchHits : noHits;
    }
}
export default SearchResult;
