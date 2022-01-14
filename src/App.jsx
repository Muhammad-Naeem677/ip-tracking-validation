import React from 'react';
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    colors : {
      primary: '#4f1150',
      secondary: '#e69acb',
      white:'#ffffff',
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Home/> */}
        <Login/>
      </div>
    </ThemeProvider>
  );
}

export default App;
