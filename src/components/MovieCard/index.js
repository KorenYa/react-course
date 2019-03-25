import React from 'react';
import Image from '../Image';

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
export default MovieCard;
