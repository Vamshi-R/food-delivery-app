import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData";

/**
 * always we are looping something in JSX we need to provide unique key property
 * example: 
 *   {
                resObj.map((restaurant) => (
                    <RestaurantCards key={restaurant?.id} resData={restaurant} />      
                ))
            }
 *  not using keys is not acceptible <<<<<< index as key (atleast not a best practice) <<<< unique id (best practice)
 */


const Body = () => {
  // Local state variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resObj);

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={(e) => {
            //filter logic for average rating
            const filteredList = listOfRestaurant.filter((res) => res.rating > 4);
            setListOfRestaurant(filteredList); 
            console.log(
                filteredList,
              "UI not update but res if filtered, how to do it"
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCards key={restaurant?.id} resData={restaurant} />
        ))}
        {/* <RestaurantCards name="Meghana Foods" cuisine="Biryani, North Indian" rating="3.4 stars" time="38 minutes"/>
                        <RestaurantCards name="Andhra Mess" cuisine="Andhra Style" rating="4 stars" time="32 minutes"/> */}
      </div>
    </div>
  );
};

export default Body;
