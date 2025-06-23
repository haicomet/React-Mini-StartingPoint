import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Grid from "./components/Grid"


const App = () => {
  return (
    <div className="app">
      <h1 className="title">Hello World</h1>
       <Grid/>
       <RemoveCols/>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
