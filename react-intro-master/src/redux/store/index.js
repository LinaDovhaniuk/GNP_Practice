import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

// Instruments
import reducer from '../reducers';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [logger];

export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));