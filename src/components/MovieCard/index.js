import React from 'react';
import Link from 'next/link';
import Image from '../Image';
import PropTypes from 'prop-types';
import './movie-card.css';
const MovieCard = function(props) {
    return (
        <Link href={`/film/${props.id}`}>
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
        </Link>
    );
};
MovieCard.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    genre: PropTypes.string
};
export default MovieCard;
