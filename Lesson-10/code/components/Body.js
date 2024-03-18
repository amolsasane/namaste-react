import ResCard from "./ResCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer.js";
import { SWIGGY_API } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

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

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Oh.. You are offline!</h1>;

  function topRatedRestaurantBtn() {
    const topRatedRes = restaurantsList.filter(
      (res) => res.info.avgRating > 4.2
    );
    setRestaurantsList(topRatedRes);
    console.log(topRatedRes);
  }

  function searchedRestaurentBbtn() {
    {
      const filteredRestaurent = restaurantsList.filter(
        (res) =>
          res.info.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          res.info.cuisines.some((cuisine) =>
            cuisine.toLowerCase().includes(searchInput.toLowerCase())
          )
      );

      filteredRestaurent.length === 0
        ? setErrorMessage("No matching restaurants found!")
        : setErrorMessage("");

      setSearchedRestaurents(filteredRestaurent);
      console.log(filteredRestaurent);
    }
  }

  return restaurantsList.length === 0 ? (
    <div className="shimmer-container">
      {Array.from({ length: 10 }).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="main">
      <div className="flex m-6 justify-center items-center">
        <div className="btn-container">
          <button
            className="bg-green-100 p-2 px-3 rounded-lg font-bold"
            onClick={() => {
              topRatedRestaurantBtn();
            }}
          >
            Top Rated Restaurents
          </button>
        </div>

        <div className="">
          <input
            className="bg-gray-100 border-gray-300 ml-4 mr-2 p-[4px] border-2 rounded-tl-full rounded-bl-full"
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="bg-blue-100 p-[5px] pr-[1rem] pl-[1rem] rounded-tr-full rounded-br-full"
            onClick={() => {
              searchedRestaurentBbtn();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="error-msg-container">
        <h1 className="text-[2rem] font-bold text-red-500 text-center">
          {errorMessage}
        </h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {searchedRestaurents.map((restaurant) => (
          <Link
            className="res-card-link"
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
