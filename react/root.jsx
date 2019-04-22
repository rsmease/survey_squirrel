import React from 'react';
import ReactDOM from 'react-dom';

import createStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<div store={createStore()}>Hello React?</div>, root);
})
