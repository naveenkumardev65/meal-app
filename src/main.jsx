import React from 'react'
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './store/index.js';

import { ThemeProvider } from '@mui/material/styles';
import theme from './utils/theme.js';
import Router from './routes/index.jsx';
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router />
    </Provider>
  </ThemeProvider>
  ,
)
