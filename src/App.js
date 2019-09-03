import React from 'react';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';

import { Router } from 'react-router-dom';
import history from './services/history';

import store from './store';

import Routes from './routes/index';
import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </Provider>
    );
}

export default App;
