import React from "react";
import Form from "./Form";
import Header from "./Header";
import TODOList from "./TODOList";
import "./styles.css";
import TaskSummary from "./TaskSummary";


function App() {
  return (
    <div className="App">
      <Header />
      <TaskSummary completed={0} total={0}/>
      <Form />
      <TODOList />
    </div>
  );
}

export default App;
