import restaurants from "../utils/mockData.js";
import ResCard from "./ResCard.js";

function Body() {
  return (
    <div className="main">
      <div className="btn-container">
        <button className="btn">Top Restaurents</button>
      </div>
      <div className="res-card-container">
        {restaurants.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Body;
