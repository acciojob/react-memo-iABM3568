import React from "react";

const Skills = () => {
  return (
    <>
      <h2>React.memo</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </>
  );
};

export default React.memo(Skills);
