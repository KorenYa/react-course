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
                <span className='status-bar__sort'>release date</span>
                <span className='status-bar__sort'>rating</span>
            </div>
        </div>
    );

    return (
        <div className='status-bar'>{props.total > 0 ? status : noHits}</div>
    );
};
StatusBar.propTypes = {
    total: PropTypes.number
};
export default StatusBar;
