import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { KeyBoardProvider } from "./context/AllProductContextApi.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <KeyBoardProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </KeyBoardProvider>
);
