import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {ThemeProvider} from "@material-ui/styles";
import Theme from './components/theme';


ReactDOM.render(  <ThemeProvider theme={Theme}><App/> </ThemeProvider> ,  document.getElementById('root'));

