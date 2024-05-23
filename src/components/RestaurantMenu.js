import Shimmer from "./Shimmer";
import { CDN_MENU_ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useFetchMenu from "../utils/useFetchMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useFetchMenu(resId);

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

  return (
    <div className="info-menu">
      <h2>{name}</h2>
      <div className="info-card">
        <div className="ratings-line">
          <h4>
            {avgRatingString} ({totalRatingsString})
          </h4>
          <h4>{costForTwoMessage}</h4>
        </div>
        <div className="info-other-menu">
          <h4>{cuisines?.join(", ")}</h4>
          <h4>{sla?.slaString?.toLowerCase()}</h4>
          <p>{feeDetails?.message?.replace(/<\/?[^>]+(>|$)/g, "")}</p>
        </div>
      </div>
      <div className="menu-item">
        {console.log(itemCards)}
        <div>
          {itemCards?.map((item) => (
            <div key={item?.card?.info?.name}>
              <div className="menu-item-sections">
                <div>
                  <h4>
                    {item?.card?.info?.name} -
                    {` ${item?.card?.info?.itemAttribute?.vegClassifier}`}
                  </h4>
                  <h5>{`${item?.card?.info?.price / 100}/-`}</h5>
                  {item?.card?.info?.ratings?.aggregatedRating &&
                    item?.card?.info?.ratings?.aggregatedRating
                      ?.ratingCountV2 && (
                      <h5>
                        ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}(
                        {
                          item?.card?.info?.ratings?.aggregatedRating
                            ?.ratingCountV2
                        }
                        )
                      </h5>
                    )}
                  <p className="menu-item-description">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div>
                  {
                    <div className="menu-item-pic">
                      {item?.card?.info?.imageId !== undefined ? (
                        <>
                          <img
                            className="img"
                            alt="menu-item-pic"
                            src={CDN_MENU_ITEM_URL + item?.card?.info?.imageId}
                          />
                          <button className="add-item-btn">Add</button>
                        </>
                      ) : (
                        <>
                          <div className="img"></div>
                          <button className="add-item-only-btn">Add</button>
                        </>
                      )}
                    </div>
                  }
                </div>
              </div>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
