import React from "react";
import ReactDOM from "react-dom/client";
import myImage from "./Images/food-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="img-container">
        <img className="img" src={myImage} alt="logo" />
      </div>
      <div className="heading-container">
        <h1 className="header-heading">FoodHub</h1>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">Search</li>
          <li className="nav-list-item">Cart</li>
        </ul>
      </nav>
    </div>
  );
}

function Main() {
  return (
    <div className="main">
      <div className="btn-container">
        <button className="btn">Top Restaurents</button>
      </div>
      <div className="res-card-container"></div>
    </div>
  );
}

function MyApp() {
  return (
    <div className="my-app">
      <Header />
      <Main />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyApp />);
