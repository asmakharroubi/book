import "./App.css";
import Navigator from "./components/Navigator/Navigator";
import Main from "./components/Main/Main";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import BooksList from "./components/BooksList/BooksList";

function App() {
 

  return (
    <div className="App">
      <Navigator />
      <Main />
      <BooksList  />
      
    </div>
  );
}

export default App;
