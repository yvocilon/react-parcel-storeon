import React from "react";
import useStoreon from "storeon/react";
import styled from "styled-components";

const Counter = styled.h1`
  color: red;
`;

export default () => {
  const { dispatch, count } = useStoreon("count");

  return (
    <div>
      <Counter data-testid="counter">{count}</Counter>
      <button data-testid="increment" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button data-testid="decrement" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
};
