import restaurants from "../utils/mockData.js";
import ResCard from "./ResCard.js";
import { useState } from "react";

function Body() {
  const [restaurantsList, setRestaurantsList] = useState(restaurants);
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
