import React from 'react';
import configureStore from '../src/store';
import { StaticRouter } from 'react-router-dom';
import Root from '../src/Root';

const Index = props => {
    const store = configureStore();
    const context = {};
    return <Root Router={StaticRouter} context={context} store={store} />;
};

export default Index;
