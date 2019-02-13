import React from "react"
import "../css/Div.css"

function Div(props) {

    return (
        <div className="box" id={props.id} onClick={() => props.handleClick(props.id)}>
            <img className="img"
                alt={props.name}
                src={props.image}
                height="150px"
                width="150px"
            />
        </div>

    );
}

export default Div;