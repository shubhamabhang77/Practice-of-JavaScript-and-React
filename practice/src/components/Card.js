import React from "react";


function Card(props) {
    return (
        <div className="contacts">
            <p>{props.question}</p>
            <p>{props.answer}</p>
            <br></br>
        </div>
    )
}


export default Card;
