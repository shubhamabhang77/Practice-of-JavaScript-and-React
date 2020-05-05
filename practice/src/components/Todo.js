import React from "react";
import "./style.css";


function Todo(props) {
    const temp = {
        fontStyle: "italics",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }
    return (
        <div className="todo-item">

            <input 
                type="checkbox"
                checked={props.item.completed}
                onChange={() => props.onHandleClick(props.item.id)}    
            ></input>

            <p style={props.item.completed ? temp : null}>{props.item.name + props.item.completed}</p>
        </div>
    )

}



export default Todo;