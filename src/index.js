import 'semantic-ui-css/components/menu.css';
import 'semantic-ui-css/components/site.css';
import 'semantic-ui-css/components/transition.css';
import 'semantic-ui-css/components/reset.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './views/Welcome';
import * as serviceWorker from './serviceWorker';
import './index.css';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <div className="main-container">
      <Welcome />
    </div>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
