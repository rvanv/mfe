import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render( <App onSignIn={onSignIn} history={history}/>, el);

    return {
        onParentNavigate({ pathname: nextPathname}) {
            if(history.pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

if (process.env.NODE_ENV === 'development') {
    const auth = document.querySelector('#dev-auth');

    if (auth) {
        mount(auth, { defaultHistory: createBrowserHistory() });
    }
}
export { mount };