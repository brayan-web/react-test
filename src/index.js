import React from 'react';
import ReactDOM from 'react-dom/client';
import './fonts/fonts.css'
import './index.css';
import MainRoutes from '../src/routes/MainRoutes';
import reportWebVitals from './reportWebVitals';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <MainRoutes />
    </ThemeProvider>
  </React.StrictMode>
);


reportWebVitals();
