import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import styles from '../css/style.css';
import App from './app';
import store from './store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('app');

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>  
        <App />
      </Provider>
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