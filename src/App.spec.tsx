import React from "react";
import { render, fireEvent, waitForElement } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import App from "./App";
import StoreProvider from "./store";

describe("app", () => {
  test("it displays initial count", async () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );

    const counter = getByTestId("counter");
    expect(counter.textContent).toBe("0");
  });
  test("it increments the counter", async () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );

    const counter = getByTestId("counter");

    const increment = getByTestId("increment");
    increment.click();

    expect(counter.textContent).toBe("1");
    increment.click();
    increment.click();
    increment.click();

    expect(counter.textContent).toBe("4");
  });

  test("it decrements the counter", async () => {
    const { getByText, getByTestId, container, asFragment } = render(
      <StoreProvider>
        <App />
      </StoreProvider>
    );

    const counter = getByTestId("counter");

    const decrement = getByTestId("decrement");

    decrement.click();

    expect(counter.textContent).toBe("3");

    decrement.click();
    decrement.click();
    decrement.click();

    expect(counter.textContent).toBe("0");
  });
});
