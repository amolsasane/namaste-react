import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
  const { ResId } = useParams();

  const resInfo = useResMenu(ResId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="res-menu">
      <h1 className="font-bold text-[2rem] pt-4 text-center">{name}</h1>
      <h3 className="pb-4  text-lg text-center">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h2 className="text-center text-lg font-bold">Menu</h2>
      <ul className="text-center m-auto w-[500px]">
        {itemCards.map((item) => (
          <li className="text-justify" key={item.card?.info?.id}>
            {item.card?.info?.name} - Rs. {item.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResMenu;
