import React, { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const addRows = () => {
    //   let p = [...grid]
    //   p.push(new Array(grid[0].length).fill(""))
    //   setGrid(p)
    setGrid([...grid, new Array(grid[0].length).fill("")]);
  };

  const addColumns = () => {
    setGrid(grid.map((row) => [...row, ""]));
  };

  const removeColumn = () => {
    setGrid(grid.map((row) => row.slice(0, -1)));
  };

  const removeRows = () => {
    setGrid(grid.slice(0, -1));
  };

  const ColorSelect = () => {


  };

  const resetColor = () => {
    setGrid(grid.map((row) => row.map(() => "white")))
  }

  return (
    <div>
      <h1>Grid</h1>
      <table>
        <tbody>
          {grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((col, colIndex) => (
                <td key={colIndex}>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addColumns}> Add Columns</button>
      <button onClick={addRows}> Add Rows</button>
      <button onClick={removeColumn}>Remove Columns</button>
      <button onClick={removeRows}>Remove Rows</button>
      <button onClick={resetColor}>Clear</button>
      <select onChange={ColorSelect}>
        <option value="Red">Red</option>
        <option value="Blue">Blue</option>
        <option value="Purple">Purple</option>
        <option value="Green">Green</option>
      </select>
    </div>
  );
};

export default Grid;
