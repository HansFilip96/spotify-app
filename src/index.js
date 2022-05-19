import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { ThemeProvider } from "@mui/system";
import { ThemeOptions } from "./style/material-themes";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={ThemeOptions}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
