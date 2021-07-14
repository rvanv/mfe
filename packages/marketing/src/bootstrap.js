import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

if (process.env.NODE_ENV === 'development') {
    const marketing = document.querySelector('#dev-marketing');

    if (marketing) {
        mount(marketing);
    }
}
export { mount };