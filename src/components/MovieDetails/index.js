import React, { Component } from 'react';
import Image from '../Image';

import './movie-details.scss';
class MovieDetails extends Component {
    render() {
        const movie = this.props.movie;
        return (
            <div className='movie-details'>
                <div className='row'>
                    <div className='col-4'>
                        <Image src={movie.poster_path} alt={movie.title} />
                    </div>
                    <div className='col-8'>
                        <h2 className='movie-details__title'>{movie.title}</h2>
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
        );
    }
}
export default MovieDetails;
