import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import CSV from "../test.csv";
import Papa from 'papaparse';
import SearchBar from "./SearchBar";
function HomePage() {
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
  return (
    <div className="screen">
      <div className ="float-child">
        <div>
          <Box
            className="display-container"
            sx={{ width: "16vw", height: "94vh" }}
          >
              <SearchBar />
          </Box>
        </div>
      </div>
      <div className ="float-child">
        <div className ="table">
          Year 1
          <table className ="year">
            <tr>
              <th className ="category">Fall Quarter</th>
              <th className ="category">Winter Quarter</th>
              <th className ="category">Spring Quarter</th>
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
export default HomePage;
