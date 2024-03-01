import myImage from "../utils/images/food-logo.png";
import { useState } from "react";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="img-container">
        <img className="img" src={myImage} alt="logo" />
      </div>

      <div className="heading-container">
        <h1 className="header-heading">FoodHub</h1>
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-list-item">Home</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
