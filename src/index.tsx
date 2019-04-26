import React from "react";
import { render } from "react-dom";

import StoreProvider from "./store";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding:0;
    margin:0;
    background-color: #474343;
  }
`;

render(
  <StoreProvider>
    <GlobalStyle />
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
