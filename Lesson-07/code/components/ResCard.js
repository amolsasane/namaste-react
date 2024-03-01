import RES_LOGO_LINK from "../utils/constants";

function ResCard(props) {
  const { resData } = props;
  const { name, locality, cuisines, avgRating, cloudinaryImageId, id } =
    resData.info;
  return (
    <div className="resCard">
      <img
        className="res-img"
        alt="Restaurant Image"
        src={RES_LOGO_LINK + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <p className="res-address">{locality}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
    </div>
  );
}

export default ResCard;
