import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withFastDeliveryLabel } from "./withFasterDeliveryLabel";
import { apiData } from "../components/__mocks__/apiMock";
import Modal from "./Modal";
import { useSelector } from "react-redux";

const Body = () => {
  const [restroList, setRestroList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [clsName, setClsName] = useState("filterOffbtn");
  const [filterText, setFilterText] = useState("Ratings 4.0+");
  const [searchText, setSearchText] = useState("");
  const loggedIn = useSelector((state) => state.profile.loggedIn);

  const filteredResList = filterList?.filter((res) => {
    return res.info.avgRating > 4;
  });

  const FastDeliveryRestaurantCard = withFastDeliveryLabel(RestaurantCard);

  const searchRestro = () => {
    let filteredRestroList = restroList?.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterList(filteredRestroList);
  };

  const handleFilterRestro = () => {
    if (clsName == "filterOffbtn") {
      setFilterList(filteredResList);
      setClsName("filterOnbtn");
      setFilterText("Ratings 4.0+ ❌");
    } else {
      searchRestro();
      setClsName("filterOffbtn");
      setFilterText("Ratings 4.0+");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const getUserName = () => {
    return (
      <div>
        <Modal />
      </div>
    );
  };

  const fetchData = async () => {
    // Turn this ON to get the real time Swiggy API Data.
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();
    setRestroList(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterList(
      apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return restroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {!loggedIn && getUserName()}
      <div className="p-[10px]">
        <input
          className="rounded-sm border-[1px] border-[grey]"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchRestro()}
        />
        <button
          className="mx-[8px] px-[15px] rounded-sm border-[1px] border-[grey]"
          onClick={searchRestro}
        >
          Search
        </button>
      </div>
      <button
        className={`${clsName} m-[10px] p-[6px] rounded-xl border-[1px] border-[grey]`}
        onClick={handleFilterRestro}
      >
        {filterText}
      </button>
      <div className="flex flex-wrap">
        {filterList?.map((res) => (
          <div className="res-link-card" key={res?.info?.id}>
            <Link key={res?.info?.id} to={"/restaurants/" + res?.info?.id}>
              {res?.info?.sla?.deliveryTime <= 30 ? (
                <FastDeliveryRestaurantCard resData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
