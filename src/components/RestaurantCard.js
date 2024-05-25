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
      className="w-[237px] h-[330px] p-[6px] m-[5px]
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

export const withFastDeliveryLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-orange-600 text-white rounded-xl absolute z-50 p-1 mx-[17px] my-[14px] opacity-90 text-sm">
          Fast Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
