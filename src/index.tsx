import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app';
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle/>
  </React.StrictMode>
);


