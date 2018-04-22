import React from 'react';
import ReactDOM from 'react-dom';

import Tasker from './Tasker';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(
  <Tasker />,
  document.querySelector('[data-js-tasker]')
);

registerServiceWorker();
