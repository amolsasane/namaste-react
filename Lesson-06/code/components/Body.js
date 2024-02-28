import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";

function Body() {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [searchedRestaurents, setSearchedRestaurents] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5744018&lng=73.818406&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
              const filteredRestaurent = restaurantsList.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );

              setSearchedRestaurents(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="res-card-container">
        {searchedRestaurents.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
