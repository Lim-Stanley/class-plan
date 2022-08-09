import React, { useState, useEffect } from "react";
import List from "./List.js";

function SearchBar({ updateState }) {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="search">
      <input type='text' placeholder='Search Major' value = {inputText} onChange={(e) => inputHandler(e)}/>
      <List input={inputText} updateState={updateState} />
    </div>
  );
}
export default SearchBar;
