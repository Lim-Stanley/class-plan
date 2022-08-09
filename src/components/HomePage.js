import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Table from './Table.js'

const classes ={
  '' : [[['--', '--', '--'], ['--', '--', '--'], ['--', '--', '--']],
  [['--', '--', '--'], ['--', '--', '--'], ['--', '--', '--']],
  [['--', '--', '--'], ['--', '--', '--'], ['--', '--', '--']],
  [['--', '--', '--'], ['--', '--', '--'], ['--', '--', '--']]],
  'Public Affairs' : [[["PA 10", "PA 20", "PA 30"],["GE", "GE", "GE"], ["GE", "GE", "GE"]], 
  [["PA 40", "PA 50", "PA 60"],["PA 120", "GE", "GE"], ["GE", "GE", "GE"]],
  [["PA 70", "PA 80", "PA M109"],["PA 115", "PA 116", "PA 111"], ["PA 112", "PA 113", "PA 114"]],
  [["PA 187A", "PA 187B", "PA 187C"],["GE", "GE", "GE"], ["GE", "GE", "GE"]]],
  'Astrophysics' : [[["PHY&AST 1A", "PHY&AST 1B", "PHY&AST 1C"],["PHY&AST 81", "PHY&AST 82", "CHEM 20A"], ["MATH 31A", "MATH 31B", "MATH 32A"]],
  [["PHY&AST 4AL", "PHY&AST 4BL", "PHY&AST 17"],["PIC 10A", "PHY&AST 108", "PHY&AST M122"], ["MATH 32B", "MATH 33A", "MATH 33B"]],
  [["PHY&AST 18L", "PHY&AST 115", "PHY&AST 117"],["PHY&AST 105A", "PHY&AST 105B", "PHY&AST 110A"], ["PHY&AST 124", "PHY&AST 132", "PHY&AST 140A"]],
  [["PHY&AST 127", "PHY&AST 140", "PHY&AST 180"],["PHY&AST 110B", "PHY&AST 115A", "PHY&AST 115B"], ["GE", "GE", "PHY&AST 115C"]]
  ]
}
function HomePage() {
  const [major, setMajor] = useState("")
  console.log(major)

  return (
    <div className="screen">
      <div >
          <SearchBar updateState = {setMajor}/>
      </div>
      <div className = 'table-row'>
        <Table year={1} classes={classes[major][0]}></Table>
        <Table year={3} classes={classes[major][2]}></Table>
      </div>
      <div className = 'table-row'>
        <Table year={2} classes={classes[major][1]}></Table>
        <Table year={4} classes={classes[major][3]}></Table>
      </div>
    </div>
  );
}
export default HomePage;
