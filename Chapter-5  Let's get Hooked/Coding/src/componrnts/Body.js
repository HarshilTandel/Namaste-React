import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../../utils/mockData";

const Body = () => {

  const [topratedres,settopratedres] = useState(resList);

  const handleFilterClick = () => {
    const filtered = topratedres.filter(
      (res) => parseFloat(res.info.ratingNew.ratings.DINING.ratingV2) > 4
    );
    settopratedres(filtered);
  };

  return (
    <div className="body">
      <div className="search-bar">
        <input type="text" placeholder="Search Restaurant...."></input>
        <button className="filter" onClick={handleFilterClick}>
          Top Rated Restaurant🔍
        </button>
      </div>
      <div className="res-container">
        {topratedres.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
