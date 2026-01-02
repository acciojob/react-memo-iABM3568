import React, { useMemo } from "react";

const UseMemo = ({ count }) => {
  const expensiveCalculation = useMemo(() => {
    return count * 2;
  }, [count]);

  return <p>Calculated Value: {expensiveCalculation}</p>;
};

export default UseMemo;
