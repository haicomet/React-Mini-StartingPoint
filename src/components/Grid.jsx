import React, { useState } from "react";

const Grid = () => {
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  const removeColumn = () => {
    setGrid((prevGrid) => prevGrid.map((row) => row.slice(0, -1)));
  };

  const removeRows = () => {
    setGrid((prevGrid) => prevGrid.slice(0, -1));
  };

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
      <button onClick={removeColumn}>Remove Columns</button>
      <button onClick={removeRows}>Remove Rows</button>
    </div>
  );
};

export default Grid;
