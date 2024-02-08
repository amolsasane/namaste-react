import myImage from "../utils/images/food-logo.png";

function Header() {
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
          <li className="nav-list-item">Search</li>
          <li className="nav-list-item">Cart</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
