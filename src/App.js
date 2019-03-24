import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchForm from './components/SearchForm';
import StatusBar from './components/StatusBar';
import SearchResult from './components/SearchResult';

import './styles/general.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: 'Narnia', moviesList: { total: 0 } };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(
            'http://react-cdp-api.herokuapp.com/movies?search=' +
                this.state.inputValue +
                '&searchBy=title'
        )
            .then(response => response.json())
            .then(moviesList => this.setState({ moviesList }));
    }

    render() {
        return (
            <ErrorBoundary>
                <SearchForm
                    inputValue={this.state.inputValue}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <StatusBar moviesList={this.state.moviesList} />
                <SearchResult moviesList={this.state.moviesList} />
            </ErrorBoundary>
        );
    }
}
export default App;
