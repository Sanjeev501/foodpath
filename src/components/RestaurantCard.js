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

  return (
    <div
      data-testid="res-card"
      className="w-[237px] h-[390px] p-[6px] m-[5px]
      rounded-[18px] transition-transform duration-200 ease transform scale-95 hover:scale-100"
    >
      <img
        className="rounded-[20px] w-[235px] h-[150px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="m-[10px] text-base font-semibold">{name}</div>
      <div className="text-base m-[5px]">
        {"⭐" + avgRating} ➖ {sla.deliveryTime} mins
      </div>
      <div className="m-[10px]">{cuisines.join(", ")}</div>
      <div className="m-[10px]">{areaName}</div>
    </div>
  );
};

export default RestaurantCard;
