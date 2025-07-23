import React from "react";
import Form from "./Form";
import Header from "./Header";
import TODOHero from "./TODOHero";
import TODOList from "./TODOList";


function App() {
  return (
    <div className="App">
      <Header />
      <TODOHero todos_completed ={0} total_todos={0} />
      <Form />
      <TODOList />
    </div>
  );
}

export default App;
