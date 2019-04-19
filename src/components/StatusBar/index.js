import React from 'react';
import PropTypes from 'prop-types';
import './status-bar.scss';
const StatusBar = function(props) {
    const noHits = <span>&nbsp;</span>;

    const status = (
        <div>
            {props.total} movies found
            <div className='status-bar__filters'>
                <span>Sort by</span>
                <span
                    className={`status-bar__sort ${
                        props.sortBy === 'release_date' ? 'active' : ''
                    }`}
                    onClick={props.handleSortBy.bind(this, 'release_date')}
                >
                    release date
                </span>
                <span
                    className={`status-bar__sort ${
                        props.sortBy === 'vote_count' ? 'active' : ''
                    }`}
                    onClick={props.handleSortBy.bind(this, 'vote_count')}
                >
                    rating
                </span>
            </div>
        </div>
    );

    return (
        <div className='status-bar'>{props.total > 0 ? status : noHits}</div>
    );
};
StatusBar.propTypes = {
    total: PropTypes.number,
    sortBy: PropTypes.string,
    handleSortBy: PropTypes.func
};
export default StatusBar;
