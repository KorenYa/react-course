import React, { Component } from 'react';
import Image from '../Image';

import './movie-card.scss';
class MovieCard extends Component {
    render() {
        return (
            <div className='movie-card'>
                <Image src={this.props.poster} alt={this.props.title} />
                <h2 className='movie-card__title'>
                    {this.props.title}
                    <span className='movie-card__date'>{this.props.date}</span>
                </h2>
                <div className='movie-card__genre'>{this.props.genre}</div>
            </div>
        );
    }
}
export default MovieCard;
