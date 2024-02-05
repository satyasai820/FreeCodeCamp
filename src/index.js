import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme();

theme.typography.h1 = {
 
  [theme.breakpoints.down('md')]: {
    fontSize: '27px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '40px',
  },
  fontFamily:'"Lato",sans-serif',
  color:'#1B1B32',
  fontWeight:'700',
}

theme.typography.h6 = {
  fontFamily:'"Lato",sans-serif',
  fontWeight: '550',
  color: '#1B1B32',
}

theme.typography.p ={
  fontFamily:'"Lato",sans-serif',
  fontSize:'12px',
  [theme.breakpoints.only('lg')]:{
    fontSize:'15px',
  },
  [theme.breakpoints.only('md')]:{
    fontSize:'13px',
  },
  [theme.breakpoints.down('md')]:{
    fontSize:'15px',
  },
  color:'#2A2A40',
  // '&:hover':{
  //   borderBottom:'1px solid black',
  // }
}


root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
