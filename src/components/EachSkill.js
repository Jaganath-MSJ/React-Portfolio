import React from "react";

function EachSkill(props) {
    return (
        <div>
            <img src={props.img} alt={props.label} />
            <h2>{props.label}</h2>
        </div>
    )
}

export default EachSkill;