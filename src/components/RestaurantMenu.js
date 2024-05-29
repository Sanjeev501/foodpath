import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
    feeDetails,
    costForTwoMessage,
  } = resInfo?.cards?.[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-8/12 mx-auto">
      <h2 className="text-2xl font-medium py-3">{name}</h2>
      <div className="bg-gradient-to-b from-white via-orange-100 to-slate-200 px-4 py-4 rounded-b-3xl">
        <div className="rounded-xl border border-gray-200 shadow-sm bg-white p-4">
          <div className="flex justify-between flex-wrap w-[32%]">
            <p>
              {avgRatingString} ({totalRatingsString})
            </p>
            <p>|</p>
            <h4>{costForTwoMessage}</h4>
          </div>
          <div className="py-5">
            <h4>{cuisines?.join(", ")}</h4>
            <h4>{sla?.slaString?.toLowerCase()}</h4>
            <p>{feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          </div>
        </div>
      </div>
      <div className="p-[8px] flex flex-col">
        {console.log(itemCards, "itemCards")}
        {categories?.map((category, index) => {
          return (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showItems={index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
