import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../code/components/Header.js";
import Body from "../code/components/Body.js";

function MyApp() {
  return (
    <div className="my-app">
      <Header />
      <Body />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
