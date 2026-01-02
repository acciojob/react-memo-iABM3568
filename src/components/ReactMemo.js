import React, { useState } from "react";

const Skills = () => {
  console.log("React.memo component rendered");

  const [skills, setSkills] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ]);
  const [input, setInput] = useState("");

  const addSkill = () => {
    if (input.length > 5) {
      setSkills([...skills, input]);
      setInput("");
    }
  };

  return (
    <>
      <h2>React.memo</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addSkill}>Add Skill</button>

      <ul>
        {skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>
    </>
  );
};

export default React.memo(Skills);
