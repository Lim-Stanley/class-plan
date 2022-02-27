import React from 'react';
import ReactDOM from 'react-dom';
import { Box } from '@mui/material';
import CSV from "./test.csv";
import { CSVLink, CSVDownload } from "react-csv";
import './index.css';

// npm install react-csv --save;

let rows = [
    ["CS31", "LING20", "MATH61"],
    ["CS32", "Ling120", "MATH70"]]


// Colors:
const RED = "#E27D60"
const ORANGE = "E8A87C"
const PURPLE = "C38D0E"
const BLUE = "41B3A3"

const majorList = ["Aerospace Engineering", "Bioengineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
"Computer Science", "Computer Science and Engineering", "Electrical Engineering", "Materials Engineering", "Mechanical Engineering","a","a","a","a","a","a","a","a","a","a","a","a","a", "a","a","a","a","a","a","a","a","a","a","a","a","a",]

class Display extends React.Component {
    setMode(name) {
        return name
    }

    render() {
        let search = [<input class = "searchSide" type="text" id="myInput" placeholder="Search for majors..."></input>]
        let majorButtonList = [];
        for (let i = 0; i < majorList.length; i++){
            majorButtonList.push(<li id = "classList"><button class = "class" onClick ={() => this.setMode(majorList[i])}>{majorList[i]}</button></li>)
        }
        if (majorButtonList.length > 26) {
            majorButtonList = majorButtonList.slice(0, 26)}
        let majorDisplayList = (<ul id="myUL">{majorButtonList}</ul>)
        return (
        <div className = "screen">
            <div class = "float-child">
                <div>
            <Box className = "display-container" sx = {{width: '16vw', height: '94vh'}}>
                <div id = "vert" className="display">
                    <div id = "searchBar">{search}</div>
                    {majorDisplayList}
                </div>
            </Box>
                </div>
            </div>
            <div class = "float-child">
                <div class = "table">
                    Year 1
                <table class="year">
                <tr>
                    <th class = "category">Fall Quarter</th>
                    <th class = "category">Winter Quarter</th>
                    <th class = "category">Spring Quarter</th>
                </tr>
                    <tr>
                        <td>CS32</td>
                        <td>CS33</td>
                        <td>CS33.1</td>
                        </tr>
                        <tr>
                            <td>Berglunds snabbköp</td>
                            <td>Christina Berglund</td>
                            <td>Sweden</td>
                        </tr>
                            <td>Berglunds snabbköp</td>
                            <td>Christina Berglund</td>
                            <td>Sweden</td>
                        </table>
                        </div>
                    </div>
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
