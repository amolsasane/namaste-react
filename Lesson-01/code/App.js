// Creating nested structure using React

const container = React.createElement(
  "div",
  { id: "container" },
  [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am first h1"),
      React.createElement("h1", {}, "I am first h2"),
    ]),
  ],
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am second h1"),
      React.createElement("h1", {}, "I am second h2"),
    ]),
  ]
);
console.log(container);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
