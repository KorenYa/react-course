import React, { PureComponent } from 'react';
import './title.scss';
class Title extends PureComponent {
    render() {
        return <h1 className='title'>{this.props.title}</h1>;
    }
}
export default Title;
