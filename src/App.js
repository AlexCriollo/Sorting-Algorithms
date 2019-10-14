import React, {Fragment, Component} from 'react';
import { MuiThemeProvider, createMuiTheme, Grid } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import DatasetState from './context/dataSet/DatasetState';

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#3949ab',
      },
      secondary: {
        main: '#d32f2f',
      },
    },
  }
)

const App =() => {
  return (
    <DatasetState>
      <Fragment>
        <MuiThemeProvider theme={theme}> 
          <CssBaseline />
            <Navbar/>
            <Home />
        </MuiThemeProvider>
      </Fragment>
    </DatasetState>
  );
}

export default App;
