import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [topRatedRes, setTopRatedRes] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchBtn, setSearchBtn] = useState("");

  useEffect(() => {
    fetchAllRestaurants();
  }, []);
  
  const fetchAllRestaurants = async () => {
    try {
      const apiResponse = await fetch("https://reastaurant-api.vercel.app/restaturant");
      const jsonResp = await apiResponse.json();
      console.log("All Restaurants:", jsonResp.data); // Log the data structure
      setAllRestaurants(jsonResp.data);
      setFilteredRestaurants(jsonResp.data);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const handleFilterClick = () => {
    const filtered = allRestaurants.filter((res) => {
      const rating = res.info?.ratingNew?.ratings?.DINING?.ratingV2;
      console.log("Restaurant:", res.info.name, "Rating:", rating);
      return rating ? parseFloat(rating) > 4 : false;
    });
    console.log("Filtered Restaurants:", filtered);
    setFilteredRestaurants(filtered);
  };
  
  
  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchBtn.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-bar">
        <div className="searchBtn">
          <input
            type="text"
            placeholder="Search Restaurant...."
            value={searchBtn}
            onChange={(e) => setSearchBtn(e.target.value)}
          />
          <button className="searchbtn" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="filter" onClick={handleFilterClick}>
          Filter Top Rated
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.resId}
            resData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
