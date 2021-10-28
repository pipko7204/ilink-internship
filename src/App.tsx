import React from "react";
import "./App.css";
import {LoginPage} from "./compnents/Pages/LoginPage";
import {Routes} from "./routes";
// супер странная штука. Библиотеки не хотят устанавливаться. Даже classnames начала что-то гнать, хотя я с ней всё делал
function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
