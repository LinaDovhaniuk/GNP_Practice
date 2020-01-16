import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store from './redux/store';

const theme = createMuiTheme({});
//
// ReactDOM.render(<App />, document.getElementById('mainBox'));
ReactDOM.render(
    <Provider store={ store }>
        <ThemeProvider theme = { theme }>
            <App />
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
);
