import myImage from "../utils/images/food-logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="shadow-lg">
      <div className="flex justify-between items-center max-w-[80rem] pl-4 m-auto">
        <div className="img-container">
          <img className="w-[6rem] my-[0.5]" src={myImage} alt="logo" />
        </div>

        <nav className="">
          <ul className="flex p-4">
            <li className="p-2 font-bold text-lg ">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 font-bold text-lg ">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2 font-bold text-lg ">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="p-2 font-bold text-lg text-green-600 ">
              <Link to="/grocery">Grocery</Link>
            </li>
            <button
              className={`font-bold ${
                loginBtn === "Logout" ? "text-red-600" : "text-blue-500"
              } ml-2 text-lg`}
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
    </div>
  );
}

export default Header;
