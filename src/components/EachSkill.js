import React from "react";

function EachSkill({ skill }) {
  return (
    <div>
      <div>
        <img src={skill.img} alt={skill.label} />
      </div>
      <h2>{skill.label}</h2>
    </div>
  );
}

export default EachSkill;
