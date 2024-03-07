import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_API } from "../utils/constants";

const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { ResId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_MENU_API + ResId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs. {item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
