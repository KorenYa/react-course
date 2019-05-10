import React from 'react';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
// import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import App from './components/App';

const Root = ({ Router, location, context, store }) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <App />
        </Router>
    </Provider>
);

export default hot(module)(Root);
