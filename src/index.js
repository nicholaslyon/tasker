import React from 'react';
import ReactDOM from 'react-dom';

import Tasker from './javascript/Tasker';
import registerServiceWorker from './javascript/service-workers/registerServiceWorker';

import './css/index.css';

ReactDOM.render(
  <Tasker />,
  document.querySelector('[data-js-tasker]')
);

registerServiceWorker();
