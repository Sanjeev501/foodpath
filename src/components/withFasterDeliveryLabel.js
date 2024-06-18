// Higher Order Component

export const withFastDeliveryLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-gray-700 text-white rounded-xl absolute z-10 p-1 mx-[17px] my-[14px] opacity-90 text-sm">
          Fast Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
