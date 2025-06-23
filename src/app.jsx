import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const App = () => {
  return (
    <div className="app">
      <h1 className="title">Hello World</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

//Add Rows to the Grid
const AddRows = () => {
  const [rowCount, setRowCount] = useState(0);
  const handleClick = () => {
    setRowCount(rowCount + 1);
  };

  return (
    <div>
      <h2>Rows: {rowCount}</h2>
      <button onClick={handleClick}>Add Row</button>
    </div>
  );
};
