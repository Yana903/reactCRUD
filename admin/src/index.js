import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { ThemeProvider } from "@material-ui/core/styles";
// import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import * as serviceWorker from "./serviceWorker";
// import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
    <MuiThemeProvider>
      <App />
      </MuiThemeProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
