import React from 'react';
import withMUITheme from 'hoc/withMUITheme';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div className="App">
      <Button color="primary" variant="contained">
        Default
      </Button>
    </div>
  );
}

export default withMUITheme(App);
