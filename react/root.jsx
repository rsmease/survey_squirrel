import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const store = createStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<div store={store}>Hello React?</div>, root);
})
