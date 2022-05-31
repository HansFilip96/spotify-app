import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { ThemeProvider } from "@mui/system";
import { ThemeOptions } from "./style/material-themes";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SpotifyWebApi from "spotify-web-api-node";

const spotifyApi = new SpotifyWebApi({
  clientID: "ca04cee3e771432e97806ba503a7b086",
  client_Secret: "0b27b90b36af404f90744aa726116ff4",
  redirectUri: "http://localhost:3000/",
});

const store = configureStore(spotifyApi);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={ThemeOptions}>
          <App spotifyApi={spotifyApi} />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
