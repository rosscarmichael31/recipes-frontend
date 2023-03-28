import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-cybtep0lwvv6ze0t.us.auth0.com"
        clientId="fWYQqGqF6D96GFUwBySloUD5MZ4voXso"
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: "https://dev-cybtep0lwvv6ze0t.us.auth0.com/api/v2/",
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
