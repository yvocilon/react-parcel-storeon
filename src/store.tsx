import React from "react";

import createStore from "storeon";
import StoreContext from "storeon/react/context";

interface State {
  count: number;
}

const counter = (store: createStore.Store<State>) => {
  store.on("@init", () => ({ count: 0 }));
  store.on("increment", ({ count }) => ({ count: count + 1 }));
  store.on("decrement", ({ count }) => ({ count: count - 1 }));
};

const store = createStore([
  counter,
  process.env.NODE_ENV !== "production" && require("storeon/devtools")
]);

const StoreProvider: React.FunctionComponent = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
);

export default StoreProvider;
