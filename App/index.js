import React from 'react';
//解構附值
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import styles from '../css/style.css';

const rootElement = document.getElementById('app');

const renderApp = () => {
    const App = require('./app')
  render(
    <AppContainer>
      <div>
        <App />
      </div>
    </AppContainer>,
    rootElement
  );
};

renderApp(rootElement);

if (module.hot) {
	module.hot.accept(
    './app.js',
    () => renderApp(rootElement)
  );
}