import React, { PureComponent } from 'react';
import './input.scss';
class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event);
    }

    render() {
        return (
            <input
                className='input'
                type='text'
                value={this.props.value}
                onChange={this.handleChange}
            />
        );
    }
}
export default Input;
