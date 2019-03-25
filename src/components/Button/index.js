import React, { PureComponent } from 'react';
import './button.scss';
class Button extends PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(event) {
        const searchBy = this.props.searchBy;
        this.props.onClick(event, searchBy);
    }

    render() {
        return (
            <button
                onClick={this.onClick}
                className={`btn ${this.props.styleName}`}
                type={this.props.type || ''}
            >
                {this.props.text}
            </button>
        );
    }
}
export default Button;
