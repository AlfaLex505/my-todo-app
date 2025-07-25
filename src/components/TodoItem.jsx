import React from "react";

const TodoItem = ({ task, deleteTask, toggleCompleted }) => {

    const handleChange = () => {
        toggleCompleted(task.id);
    }

    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={handleChange}
            />
            <p className="todo-text">{task.text}</p>
            <button className="delete-button" onClick={() => deleteTask(task.id)}>
                X
            </button>
        </div>
    );
}

export default TodoItem;