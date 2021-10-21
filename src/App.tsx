import React from "react";
import "./App.css";
import {Button} from "./compnents/atoms/Button";
import {Input} from "./compnents/atoms/Input";

function App() {
  return (
    <div className="App">
      {/*<Button
        name="name"
        disabled={false}
      />*/}
      <Input
        placeholder="Input user name"
        type="text"
        error={false}
        label="User name"
      />
    </div>
  );
}

export default App;
