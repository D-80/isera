import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from 'shared/styles/muiTheme';

const theme = createMuiTheme(muiTheme);

function withMUITheme(WrappedComponent) {
  return function (props) {
    return <MuiThemeProvider theme={theme}><WrappedComponent {...props} /></MuiThemeProvider>;
  }
}

export default withMUITheme;
