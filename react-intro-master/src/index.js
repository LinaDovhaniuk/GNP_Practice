import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({});
//
// ReactDOM.render(<App />, document.getElementById('mainBox'));
ReactDOM.render(
    <ThemeProvider theme = { theme }>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
