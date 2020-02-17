import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { CSSTransitionGroup } from "react-transition-group";
import "./App.css";

function App() {
  const [tasksState, setState] = useState([]);
  const [textFieldState, setTextFieldState] = useState(0);

  const handleButton = () => {
    if (textFieldState) {
      setState([
        ...tasksState,
        {
          task: textFieldState
        }
      ]);
      document.querySelector("#textfield").value = "";
    }
  };

  const handleInput = e => {
    const textInput = e.target.value;
    setTextFieldState(textInput);
  };

  return (
    <div className="App">
      <div className="title">Simple ToDo List!</div>
      <div className="form">
        <TextField
          id="textfield"
          label="Put some text in here!"
          multiline
          onChange={handleInput}
        />
        <Button variant="contained" color="primary" onClick={handleButton}>
          ADD
        </Button>
      </div>

      <div className="main-list">
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {tasksState.map(task => {
            return <ul key={task.task}>{task.task}</ul>;
          })}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}

export default App;
