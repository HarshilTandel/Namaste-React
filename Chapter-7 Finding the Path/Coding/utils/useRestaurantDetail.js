import { useState, useEffect } from "react";

const useRestaurantDetail = (city, restaurantName) => {
  const [restroDetail, setRestroDetail] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getRestroDetail();
  }, [city, restaurantName]);

  const getRestroDetail = async () => {
    try {
      const response = await fetch(
        `https://www.zomato.com/webroutes/getPage?page_url=${city}/${restaurantName}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch restaurant details");
      }
      const json = await response.json();
      setRestroDetail(json);
    } catch (err) {
      setError(err.message);
    }
  };

  return { restroDetail, error };
};

export default useRestaurantDetail;
