import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { ThemeProvider } from "@mui/system";
import { ThemeOptions } from "./style/material-themes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={ThemeOptions}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
