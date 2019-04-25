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
      <Counter>{count}</Counter>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
};
