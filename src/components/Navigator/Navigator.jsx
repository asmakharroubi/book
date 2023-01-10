import React from "react";
import AddBook from "../AddBook/AddBook";
import "./Navigator.css"

const Navigator = () => {
  return (
    <div>
      <nav>
        <ul>
          <h1 style={{marginLeft:"20px"}}>Book List</h1>
          <li>
            <a>Home</a>
          </li>
          <li>
         <AddBook/>
          </li>
         
        </ul>
      </nav>
    </div>
  );
};

export default Navigator;
