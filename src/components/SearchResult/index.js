import React from 'react';
import MovieCard from '../MovieCard';
import PropTypes from 'prop-types';
import './search-result.scss';
const SearchResult = function(props) {
    const moviesList = props.moviesList;

    const searchHits = moviesList.total > 0 && (
        <div className='search-result'>
            <div className='row'>
                {moviesList.data.map(movie => {
                    return (
                        <div className='col-4' key={movie.id}>
                            <MovieCard
                                id={movie.id}
                                date={movie.release_date.split('-')[0]}
                                genre={movie.genres[0]}
                                title={movie.title}
                                poster={movie.poster_path}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );

    const noHits = <div className='search-result__no-hits'>No films found</div>;

    return moviesList.total > 0 ? searchHits : noHits;
};
SearchResult.propTypes = {
    moviesList: PropTypes.shape({
        data: PropTypes.array,
        total: PropTypes.number
    })
};
export default SearchResult;
