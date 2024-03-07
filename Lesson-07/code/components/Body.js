import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { SWIGGY_API } from "../utils/constants.js";
import { Link } from "react-router-dom";

function Body() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchedRestaurents, setSearchedRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const result = await data.json();
    setRestaurantsList(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );

    setSearchedRestaurents(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return restaurantsList.length === 0 ? (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="main">
      <div className="filters-container">
        <div className="btn-container">
          <button
            className="btn"
            onClick={() => {
              const topRatedRes = restaurantsList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setRestaurantsList(topRatedRes);
            }}
          >
            Top Rated Restaurents
          </button>
        </div>

        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              let filteredRestaurent = restaurantsList.filter(
                (res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  res.info.cuisines.some((cuisine) =>
                    cuisine.toLowerCase().includes(searchInput.toLowerCase())
                  )
              );

              filteredRestaurent.length === 0
                ? setErrorMessage("No matching restaurants found!")
                : setErrorMessage("");

              setSearchedRestaurents(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="error-msg-container">
        <h1 className="search-error-msg">{errorMessage}</h1>
      </div>

      <div className="res-card-container">
        {searchedRestaurents.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Body;
