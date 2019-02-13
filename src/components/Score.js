import React from "react";
import "../css/Score.css"

function Score(props) {
    return (
        <div id="scoreDiv">
            <span id="prompts">{props.prompt}</span>
            <span id="scores">Score: {props.count} | Top score: {props.topscore} </span>
        </div>
    );
}

export default Score;