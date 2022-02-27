import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CSV from "../test.csv";
import Papa from 'papaparse';
import SearchBar from "./SearchBar";

function HomePage() {
  const [major, setMajor] = useState("0")
  console.log(major)
  useEffect(() => {
      async function getData() {
      const response = await fetch(CSV)
      const reader = response.body.getReader()
      const result = await reader.read() // raw array
      const decoder = new TextDecoder('utf-8')
      const csv = decoder.decode(result.value) // the csv text
      const results = Papa.parse(csv, { header: true }) // object with { data, errors, meta }
      const rows = results.data // array of objects
    }
    getData()
  }, []);
  function getTable1(){
      switch(major){
            case "0":
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 1))
            case "Public Affairs":
                return (setTable([["PA 10", "PA 20", "PA 30"],["GE", "GE", "GE"], ["GE", "GE", "GE"]
                ], 1))
            case "Astrophysics":
                return (setTable([["PHY&AST 1A", "PHY&AST 1B", "PHY&AST 1C"],["PHY&AST 81", "PHY&AST 82", "CHEM 20A"], ["MATH 31A", "MATH 31B", "MATH 32A"]
                ], 1))
            default:
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 1))
      }
  }
  function getTable2(){
      switch(major){
            case "0":
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 2))
            case "Public Affairs":
                return (setTable([["PA 40", "PA 50", "PA 60"],["PA 120", "GE", "GE"], ["GE", "GE", "GE"]
                ], 2))
            case "Astrophysics":
                return (setTable([["PHY&AST 4AL", "PHY&AST 4BL", "PHY&AST 17"],["PIC 10A", "PHY&AST 108", "PHY&AST M122"], ["MATH 32B", "MATH 33A", "MATH 33B"]
                ], 2))
            default:
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 2))
      }
  }
  function getTable3(){
      switch(major){
            case "0":
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 3))
            case "Public Affairs":
                return (setTable([["PA 70", "PA 80", "PA M109"],["PA 115", "PA 116", "PA 111"], ["PA 112", "PA 113", "PA 114"]
                ], 3))
            case "Astrophysics":
                return (setTable([["PHY&AST 18L", "PHY&AST 115", "PHY&AST 117"],["PHY&AST 105A", "PHY&AST 105B", "PHY&AST 110A"], ["PHY&AST 124", "PHY&AST 132", "PHY&AST 140A"]
                ], 3))
            default:
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 3))
      }
  }
  function getTable4(){
      switch(major){
            case "0":
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 4))
            case "Public Affairs":
                return (setTable([["PA 187A", "PA 187B", "PA 187C"],["GE", "GE", "GE"], ["GE", "GE", "GE"]
                ], 4))
            case "Astrophysics":
                return (setTable([["PHY&AST 127", "PHY&AST 140", "PHY&AST 180"],["PHY&AST 110B", "PHY&AST 115A", "PHY&AST 115B"], ["GE", "GE", "PHY&AST 115C"]
                ], 4))
            default:
                return (setTable([["--", "--", "--"],["--", "--", "--"], ["--", "--", "--"]
                ], 4))
      }
  }
  function setTable(list, year){
      return (
          <div className ="table">
          Year {year}
          <table className ="year">
            <tr>
              <th className ="category">Fall Quarter</th>
              <th className ="category">Winter Quarter</th>
              <th className ="category">Spring Quarter</th>
            </tr>
            <tr>
              <td>{list[0][0]}</td>
              <td>{list[0][1]}</td>
              <td>{list[0][2]}</td>
            </tr>
            <tr>
              <td>{list[1][0]}</td>
              <td>{list[1][1]}</td>
              <td>{list[1][2]}</td>
            </tr>
              <td>{list[2][0]}</td>
              <td>{list[2][1]}</td>
              <td>{list[2][2]}</td>
          </table>
        </div>
      )
  }
  const table1 = getTable1()
  const table2 = getTable2()
  const table3 = getTable3()
  const table4 = getTable4()
  return (
    <div className="screen">
      <div className ="float-child">
        <div>
          <Box
            className="display-container"
            sx={{ width: "16vw", height: "94vh" }}
          >
              <SearchBar updateState = {setMajor}/>
          </Box>
        </div>
      </div>
      <div className ="float-child">
          {table1}
          {table2}
          {table3}
          {table4}
      </div>
    </div>
  );
}
export default HomePage;
