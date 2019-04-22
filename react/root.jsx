import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createStore from './store/store';
import Routes from './components/Routes';

const RouterWithContext = ({ store }) => (
  <Provider store={store}>
    <Routes />
  </Provider >
);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<RouterWithContext store={createStore()} />, root);
})
