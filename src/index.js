import React from 'react';
import ReactDOM from 'react-dom';
import { Button, TextField } from '@mui/material';
import './index.css';

// Colors:
const RED = "#E27D60"
const LIGHTBLUE = "#85DCB"
const ORANGE = "E8A87C"
const PURPLE = "C38D0E"
const BLUE = "41B3A3"

const majorList = ["Aerospace Engineering", "Bioengineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
"Computer Science", "Computer Science and Engineering", "Electrical Engineering", "Materials Engineering", "Mechanical Engineering"]

class Display extends React.Component {
    setMode(name) {
        return name
    }

    render() {
        let search = [<input type="text" id="myInput" placeholder="Search for openings.."></input>]
        let majorButtonList = [];
        for (let i = 0; i < majorList.length; i++){
            majorButtonList.push(<li><button onClick ={() => this.setMode(majorList[i])}>{majorList[i]}</button></li>)
        }
        const majorDisplayList = (<ul id="myUL">{majorButtonList}</ul>)

        return (
        <div id = "vert" className="display">
            <div>{search}</div>
            {majorDisplayList}
        </div>
        );
    }
}

function searchProcess() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  if (input === null) {return;}
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("button")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

// ========================================

ReactDOM.render(<Display />, document.getElementById('root'));
const searchBar = document.getElementById("myInput")
searchBar.onkeyup = function() {searchProcess()}
