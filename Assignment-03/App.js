import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Heading = () => {
  return <h1>I am a Component</h1>;
};
// Component composition
const Title = () => (
  <div>
    <Heading />
    <h1>I am a Composite component</h1>
  </div>
);

// JavaScript Expression in JSX
const user = "Amol";
const title = <h1>{user}</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(title);
