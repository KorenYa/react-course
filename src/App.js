import React, { Component } from 'react';
import Title from './components/Title';
import Button from './components/Button';
class App extends Component {
    render() {
        return React.createElement(
            'div',
            null,
            'netflixroulette',
            <Title />,
            <Button />
        );
    }
}
export default App;
