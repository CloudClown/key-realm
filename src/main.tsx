import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { KeyBoardProvider } from "./context/AllProductContextApi.tsx";
import { CartProvider } from "./context/CartContextApi.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <KeyBoardProvider>
    <CartProvider>
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </CartProvider>
  </KeyBoardProvider>
);
