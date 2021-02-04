import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import reportWebVitals from "./reportWebVitals";
import App from "./pages/App";

import "./index.css";

const application = (
  <ThemeProvider theme={theme}>
    <HashRouter>
      <React.Suspense fallback={<div />}>
        <App />
      </React.Suspense>
    </HashRouter>
  </ThemeProvider>
);

ReactDOM.render(application, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
