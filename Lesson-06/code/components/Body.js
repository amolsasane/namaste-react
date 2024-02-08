import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";

function Body() {
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5744018&lng=73.818406&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const result = await data.json();
    setRestaurantsList(
      result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return (
    <div className="main">
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            const topRatedRes = restaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setRestaurantsList(topRatedRes);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-card-container">
        {restaurantsList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
