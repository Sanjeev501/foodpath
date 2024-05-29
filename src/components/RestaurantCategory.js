import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        className="my-4 p-2 bg-gray-100 shadow-lg cursor-pointer flex justify-between"
        onClick={handleClick}
      >
        <h1 className="text-xl font-medium py-3">
          {data?.title} ({data?.itemCards?.length})
        </h1>
        <span className="text-lg py-3 px-5">⬇️</span>
      </div>
      {showItems && <ItemsList data={data} />}
    </div>
  );
};

export default RestaurantCategory;
