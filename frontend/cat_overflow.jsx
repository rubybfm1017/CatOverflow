
import configureStore from "./store/store";
import ReactDOM from 'react-dom';
import React from 'react';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    const store = configureStore();

    ReactDOM.render(<Root store={store} />, root);
})