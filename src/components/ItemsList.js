import { useDispatch, useSelector } from "react-redux";
import { CDN_MENU_ITEM_URL } from "../utils/constants";
import { addItem, removeItem } from "../utils/cartSlice";
import { useState } from "react";

const ItemsList = ({ items }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(removeItem(item));
  };

  const cartCount = (cartItems, item) => {
    let count = 0;
    cartItems.forEach((element) => {
      if (element?.card?.info?.name === item) {
        count++;
      }
    });
    return count;
  };

  return (
    <div>
      {items?.map((item, index) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.name}
          className="py-2"
        >
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
                <div className="flex flex-col items-center justify-center">
                  <>
                    {item?.card?.info?.imageId && (
                      <img
                        className="w-[200px] h-[150px] rounded-[15px]"
                        alt="menu-item-pic"
                        src={CDN_MENU_ITEM_URL + item?.card?.info?.imageId}
                      />
                    )}
                    {cartItems.length > 0 ? (
                      <div>
                        <button
                          className="w-[45px] p-[10px] mt-[-20px] mx-[20px] border-[0.5px] rounded-[10px] bg-white text-green-700 font-bold hover:bg-gray-200"
                          onClick={() => handleDecrement(item)}
                        >
                          -
                        </button>
                        <span className="font-bold">
                          {cartCount(cartItems, item?.card?.info?.name)}
                        </span>
                        <button
                          className="w-[45px] p-[10px] mt-[-20px] mx-[20px] border-[0.5px] rounded-[10px] bg-white text-green-700 font-bold hover:bg-gray-200"
                          onClick={() => handleIncrement(item)}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        data-testid="addBtn"
                        className="text-center w-[120px] p-[10px] mt-[-20px] mx-[40px] border-[0.5px] rounded-[10px] bg-white text-green-700 font-bold hover:bg-gray-200"
                        onClick={() => handleIncrement(item)}
                      >
                        Add
                      </button>
                    )}
                  </>
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
