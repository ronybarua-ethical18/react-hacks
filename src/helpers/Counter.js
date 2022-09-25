import React from "react";

export default function Counter() {
  const [counterVal, setCounterVal] = React.useState(0);

  const increment = () => {
    setCounterVal(counterVal + 1);
  };
  return { increment, counterVal };
}
