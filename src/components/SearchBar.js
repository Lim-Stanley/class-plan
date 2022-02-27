import React, { useState, useEffect } from 'react';
function SearchBar(){
    const majorList = ["Aerospace Engineering", "Bioengineering", "Chemical Engineering", "Civil Engineering", "Computer Engineering",
    "Computer Science", "Computer Science and Engineering", "Electrical Engineering", "Materials Engineering", "Mechanical Engineering","a","a","a","a","a","a","a","a","a","a","a","a","a", "a","a","a","a","a","a","a","a","a","a","a","a","a",]
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

    let search = [<input class = "searchSide" type="text" id="myInput" placeholder="Search for majors..."></input>]
    let majorButtonList = [];
    for (let i = 0; i < majorList.length; i++){
        majorButtonList.push(<li id = "classList"><button class = "class" onClick ={() => this.setMode(majorList[i])}>{majorList[i]}</button></li>)
    }
    if (majorButtonList.length > 26) {
        majorButtonList = majorButtonList.slice(0, 26)}
    let majorDisplayList = (<ul id="myUL">{majorButtonList}</ul>)
    return <div>RETURN</div>
}
export default SearchBar