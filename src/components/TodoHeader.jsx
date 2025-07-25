import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoHeader = () => {

    const [phrase , setPhrase] = useState(messages[0])

    const handleChange = (index) => {
        if (index <= messages.length-1){
            setPhrase(messages[index+1])
        } else {
            setPhrase(messages[0])
        }
        
    };

    return (
        <div className="summary">
            <p>{phrase}</p>
            <button onClick={() => handleChange(messages.indexOf(phrase))}>
                Click me!
            </button>
        </div>
    );
}

const messages = [
    "The only way yo do great work is to love what you do!",
    "The journey of a thousand miles begins with one step!",
    "Get comfortable with the uncomfortable.",
    "Don't wait for the opportunity, create it!",
    "It always seems impossible until it's done!",
    "Hard work beats talent when talent doesn't work hard.",
    "The only place where success comes before work is the dictionary.",
    "What would you attempt to do if you knew you could not fail?",
    "You can have results or excuses, your choice."
];

export default TodoHeader;