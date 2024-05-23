import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
    areaName,
  } = resData?.info;

  console.log(resData, "resData");
  return (
    <div className="res-card">
      <img className="img" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <div className="title">{name}</div>
      <div className="title-rating">
        {"⭐" + avgRating} ➖ {sla.deliveryTime} mins
      </div>
      <div className="title-cuisines">{cuisines.join(", ")}</div>
      <div className="title-areaName">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
