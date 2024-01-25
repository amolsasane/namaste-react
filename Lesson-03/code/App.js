import React from "react";
import ReactDOM from "react-dom/client";

// Using React Element
const head = React.createElement("h1", {}, "Namaste React Element");

// Element using JSX
const jsxheading = <h1>Namaste React from JSX</h1>;

// Functional Component - It is just an arrow function who returns some piece of JSX or react elememt.
// Ways of writing :-

//  1)
const Header = () => {
  return <h1>Hey I am Functional Component with {} and return</h1>;
};

//  2)
const Header2 = () => (
  <h1>Hey I am Functional Component without {} and return</h1>
);

//  3)
const Header3 = () => (
  <h1>
    Hey I am Functional Component with () which is mandatory to write multiple
    lines in JSX
  </h1>
);

// Functional compos rendered using </>
//root.render(<Header />);
//root.render(<Header2 />);
//root.render(<Header3 />);

//  Component Composition
const Title = () => <h2>Component</h2>;

const HeaderComponent = () => (
  <div id="container">
    <h1>I am a Composite</h1>
    <Title />
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
