import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Container,
  Paper
} from "@material-ui/core";
import { CSSTransitionGroup } from "react-transition-group";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

import "./App.css";

function App() {
  const [tasksState, setTasksState] = useState([]);
  const [textFieldState, setTextFieldState] = useState("");

  const handleAddButton = () => {
    if (textFieldState.trim()) {
      setTasksState([...tasksState, { task: textFieldState }]);
      setTextFieldState("");
    }
  };

  const handleDeleteButton = e => {
    const text = e.currentTarget.dataset.task;
    const newTasksArr = tasksState.filter(task => task.task !== text);
    setTasksState(newTasksArr);
  };

  const handleInput = e => {
    const textInput = e.target.value;
    setTextFieldState(textInput);
  };

  return (
    <div className="App">
      <Container maxWidth="xs">
        <Typography variant="h4">Simple ToDo List!</Typography>
        <div className="form">
          <TextField
            id="textfield"
            label="Put some text in here!"
            multiline
            onChange={handleInput}
            value={textFieldState}
          />
          <Button variant="contained" color="primary" onClick={handleAddButton}>
            ADD
          </Button>
        </div>

        <List>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {tasksState.map(task => {
              return (
                <Paper key={task.task}>
                  <ListItem divider>
                    <ListItemText primary={task.task} />
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      data-task={task.task}
                      onClick={handleDeleteButton}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItem>
                </Paper>
              );
            })}
          </CSSTransitionGroup>
        </List>
      </Container>
    </div>
  );
}

export default App;
