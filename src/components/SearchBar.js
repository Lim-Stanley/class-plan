import React, { useState, useEffect } from 'react';
import List from './List.js'
import TextField from "@mui/material/TextField";

function SearchBar({updateState}){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    return <div>
        <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
        <List input={inputText} updateState = {updateState} />
      </div>
    </div>
}
export default SearchBar