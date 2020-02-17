import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form">
        <TextField id="multil" label="Put some text in here!" multiline />
        <Button variant="contained" color="primary">
          ADD
        </Button>
      </div>
    </div>
  );
}

export default App;
