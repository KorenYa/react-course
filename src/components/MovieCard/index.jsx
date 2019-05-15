import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Image from '../Image';
import './movie-card.scss';

const MovieCard = (props) => {
  const {
    id, poster, title, date, genre,
  } = props;
  return (
    <Link to={`/film/${id}`}>
      <div className="movie-card">
        <div className="text-center">
          <Image src={poster} alt={title} />
        </div>
        <h2 className="movie-card__title">
          {title}
          <span className="movie-card__date">{date}</span>
        </h2>
        <div className="movie-card__genre">{genre}</div>
      </div>
    </Link>
  );
};
MovieCard.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  genre: PropTypes.string,
};
export default MovieCard;
