import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store, { history } from './redux/store';
import { ConnectedRouter as Router } from 'react-router-redux';

import Routes from './routes';

const theme = createMuiTheme({});
//
// ReactDOM.render(<App />, document.getElementById('mainBox'));
ReactDOM.render(
    <Provider store={ store }>
        <ThemeProvider theme = { theme }>
            <Router history={history}>
                <Routes />
            </Router>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
