import React from 'react';
import ReactDOM from 'react-dom';
import App from "./compnents/App";
import {ThemeProvider} from "@material-ui/styles";
import Theme from "./compnents/theme";

ReactDOM.render(
    <ThemeProvider theme={Theme}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ThemeProvider>,
  document.getElementById('root')
);

