import React, { PureComponent } from 'react';
import './button.scss';
class Button extends PureComponent {
    render() {
        return (
            <button
                className={`btn ${this.props.styleName}`}
                type={this.props.type || ''}
            >
                {this.props.text}
            </button>
        );
    }
}
export default Button;
