import MenuItemList from "./MenuItemList";
import { useState } from "react";

const Catagory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  function clickHandler() {
    setShowItems(!showItems);
  }

  return (
    <div className=" w-[50%] mx-auto my-4 p-2 shadow-lg ">
      <div
        className="flex justify-between my-2 cursor-pointer"
        onClick={() => clickHandler()}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⮝" : "⮟"}</span>
      </div>
      <div>{showItems && <MenuItemList items={data.itemCards} />}</div>
    </div>
  );
};

export default Catagory;
