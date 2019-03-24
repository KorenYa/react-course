import React, { Component } from 'react';
import './status-bar.scss';
class StatusBar extends Component {
    render() {
        const total = this.props.moviesList.total;

        const noHits = <span>&nbsp;</span>;

        const status = (
            <div>
                {total} movies found
                <div className='status-bar__filters'>
                    <span>Sort by</span>
                    <span className='status-bar__sort'>release date</span>
                    <span className='status-bar__sort'>rating</span>
                </div>
            </div>
        );

        return <div className='status-bar'>{total > 0 ? status : noHits}</div>;
    }
}
export default StatusBar;
