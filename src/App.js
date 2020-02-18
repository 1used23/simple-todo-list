import React, { useState } from "react";
import {
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
  Container
} from "@material-ui/core";
import { CSSTransitionGroup } from "react-transition-group";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

import "./App.css";

function App() {
  const [tasksState, setState] = useState([]);
  const [textFieldState, setTextFieldState] = useState(0);

  const handleAddButton = () => {
    if (textFieldState) {
      const id = tasksState.length;
      setState([...tasksState, { id: id, task: textFieldState }]);
      document.querySelector("#textfield").value = "";
    }
  };

  const handleDeleteButton = e => {
    const id = e.target.dataset.id;
    console.log(id);
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
          />
          <Button variant="contained" color="primary" onClick={handleAddButton}>
            ADD
          </Button>
        </div>

        <List>
          <CSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {tasksState.map(task => {
              return (
                <ListItem key={task.task}>
                  <ListItemText primary={task.task} />
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    data-id={task.id}
                    onClick={handleDeleteButton}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              );
            })}
          </CSSTransitionGroup>
        </List>
      </Container>
    </div>
  );
}

export default App;
