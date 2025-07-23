import React from "react";
import "./TaskSummary.css";

const TaskSummary = ({completed, total}) => {
    return(
        <section className="task-summary">
            <div className="task-text">
                <h2 className="task-title">Task Done</h2>
                <p className="task-subtitle">Keep it up</p>
            </div>
            <div className="task-circle">
                {completed}/{total}
            </div>
        </section>
    );
};

export default TaskSummary;