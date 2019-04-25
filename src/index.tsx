import React from "react";
import { render } from "react-dom";

import StoreProvider from "./store";
import App from "./App";

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
