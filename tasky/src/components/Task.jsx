import React from 'react';

const Task = (props) => {
    
    return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <i><p>{props.description}</p></i>
            <b><p>{props.priority}</p></b>
        </div>
    )
}


export default Task;
