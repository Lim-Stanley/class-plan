import React, { useState, useEffect } from 'react';
import List from './List.js'
import TextField from "@mui/material/TextField";

function SearchBar(){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const majorList = ["Aerospace Engineering", "Bioengineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
    "Computer Science", "Computer Science and Engineering", "Electrical Engineering", "Materials Engineering", "Mechanical Engineering","a","a","a","a","a","a","a","a","a","a","a","a","a", "a","a","a","a","a","a","a","a","a","a","a","a","a",]
    return <div>
        <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        <List input={inputText} />
      </div>
    </div>
}
export default SearchBar