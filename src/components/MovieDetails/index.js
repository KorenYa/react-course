import React from 'react';
import Image from '../Image';
import PropTypes from 'prop-types';
import './movie-details.scss';
const MovieDetails = function(props) {
    const movie = props.movie;
    return (
        <div className='movie-details'>
            <div className='row'>
                <div className='col-4'>
                    <Image src={movie.poster_path} alt={movie.title} />
                </div>
                <div className='col-8'>
                    <h2 className='movie-details__title'>{movie.title}</h2>
                    <h4 className='movie-details__tagline'>{movie.tagline}</h4>
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
    );
};
MovieDetails.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        tagline: PropTypes.string,
        release_date: PropTypes.string,
        runtime: PropTypes.number,
        overview: PropTypes.string
    })
};
export default MovieDetails;
