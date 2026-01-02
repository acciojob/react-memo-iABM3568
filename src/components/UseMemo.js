import React, { useMemo } from "react";

const UseMemo = ({ count }) => {
  const value = useMemo(() => {
    let num = 0;
    for (let i = 0; i < 100000000; i++) {
      num++;
    }
    return num;
  }, [count]);

  return (
    <>
      <h2>Expensive Calculation</h2>
      <p>{value}</p>
    </>
  );
};

export default UseMemo;
