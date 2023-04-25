import ReactDOM from "react-dom";
import React from "react";

import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
