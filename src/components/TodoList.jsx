import { useState } from "react";
import TodoItem from "./TodoItem";


const TodoList = () => {
    // Ussing the useState function for managing the state of the tasks,
    // Adding some example as well.
    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "Doctor's appointment",
            completed: true
        },
        {
            id: 2,
            text: "Meeting at school",
            completed: false
        }
    ]);

    // Function for managing the state of the text field in which the task will
    // be added.
    const [text, setText] = useState("");
    
    // Function for adding a task.
    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false
        };
    
    // Collect all tasks at the beginning and set text as empty.
    setTask([...tasks, newTask]);
    setText('');
    }

    // Function for deleting an specific task.
    const deleteTask = (id) => {
        setTask(tasks.filter(task => task.id !== id ));
    }

    // Function for toggling the tasks completed.
    const toggleCompleted = (id) => {
        setTask(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed};
            } else {
                return task;
            }
        }));
    }

    return(
        <div className="todo-list">
            {tasks.map(task => (
                <TodoItem
                    key={task.id} 
                    task={task}
                    deleteTask={deleteTask}
                    toggleCompleted={toggleCompleted}
                />
            ))}
            <input
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => addTask(text)}>Add</button>
        </div>
    );

}

export default TodoList;