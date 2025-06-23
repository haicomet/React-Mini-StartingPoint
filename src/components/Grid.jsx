import React, { useState } from "react";

const Grid = () => {
  const [rows, setRows] = useState(3); // 3 default
  const [cols, setCols] = useState(3);
  
  const grid = Array.from({length: rows}).map((element) => Array.from({length: cols}));

  return(
    <table>
      <tbody>
        {grid.map((rows) => {return <tr>{rows.map((columns) => {return <td></td>})}</tr>})}

      </tbody>
    </table>
  );
};

const RemoveColumns = () => {
  
  return (
    <div>
      <h1> Remover </h1>
      <button onClick={RemoveColumns}> Remove Columns </button>
    </div>
  );
}

export default Grid