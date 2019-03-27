import React from 'react';
import Image from '../Image';
import PropTypes from 'prop-types';
import './movie-card.scss';
const MovieCard = function(props) {
    return (
        <div className='movie-card'>
            <div className='text-center'>
                <Image src={props.poster} alt={props.title} />
            </div>
            <h2 className='movie-card__title'>
                {props.title}
                <span className='movie-card__date'>{props.date}</span>
            </h2>
            <div className='movie-card__genre'>{props.genre}</div>
        </div>
    );
};
MovieCard.propTypes = {
    poster: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    genre: PropTypes.string
};
export default MovieCard;
