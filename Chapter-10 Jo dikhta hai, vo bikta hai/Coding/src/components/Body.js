import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [topRatedRes, setTopRatedRes] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchAllRestaurants();
  }, []);

  const fetchAllRestaurants = async () => {
    try {
      const apiResponse = await fetch(
        "https://reastaurant-api.vercel.app/restaturant"
      );
      const jsonResp = await apiResponse.json();
      console.log("All Restaurants:", jsonResp.data);
      setAllRestaurants(jsonResp.data);
      setFilteredRestaurants(jsonResp.data);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const handleFilterClick = () => {
    const filtered = allRestaurants.filter((res) => {
      const rating = res.info?.ratingNew?.ratings?.DINING?.ratingV2;
      return rating ? parseFloat(rating) > 4 : false;
    });
    setFilteredRestaurants(filtered);
  };

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name?.toLowerCase().includes(searchBtn.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  if (!onlineStatus) {
    return <h1 className="text-center text-xl font-semibold mt-10">You are Offline</h1>;
  }

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search Restaurant..."
            value={searchBtn}
            onChange={(e) => setSearchBtn(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>
        <button
          onClick={handleFilterClick}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Filter Top Rated
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.resId}
            to={`/restaurant${restaurant.cardAction.clickUrl}`}
            className="hover:shadow-lg transition"
          >
            <RestaurantCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
