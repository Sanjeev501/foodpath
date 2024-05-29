import { CDN_MENU_ITEM_URL } from "../utils/constants";

const ItemsList = ({ data }) => {
  return (
    <div>
      {data?.itemCards?.map((item) => (
        <div key={item?.card?.info?.name} className="py-2">
          <div className="flex justify-between py-7 items-center">
            <div>
              <h4 className="font-bold">
                {item?.card?.info?.name} -
                {` ${item?.card?.info?.itemAttribute?.vegClassifier}`}
              </h4>
              <h5 className="py-1">{`${item?.card?.info?.price / 100}/-`}</h5>
              {item?.card?.info?.ratings?.aggregatedRating &&
                item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 && (
                  <h5 className="py-1">
                    ⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}(
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </h5>
                )}
              <p className="w-[500px]">{item?.card?.info?.description}</p>
            </div>
            <div>
              {
                <div className="flex flex-col items-center">
                  {item?.card?.info?.imageId !== undefined ? (
                    <>
                      <img
                        className="w-[200px] h-[150px] rounded-[15px]"
                        alt="menu-item-pic"
                        src={CDN_MENU_ITEM_URL + item?.card?.info?.imageId}
                      />

                      <button className="w-[120px] p-[10px] mt-[-20px] border-[0.5px] rounded-[10px] bg-white text-green-700 font-bold hover:bg-gray-200">
                        Add
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="w-[200px] h-[150px] rounded-[15px]"></span>

                      <button className="w-[120px] p-[10px] mt-[-110px] border-[0.5px] rounded-[10px] bg-white text-green-700 font-bold hover:bg-gray-200">
                        Add
                      </button>
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
  );
};

export default ItemsList;
