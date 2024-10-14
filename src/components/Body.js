import RestaurantCards from "./RestaurantCard";
import { useState, useEffect } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";

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
  // whenever a state variable update, react triggers a reconciliation process(re renders the component)
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  // useEffect hook is called only after the body component is rendered.
  useEffect(()=>{
    console.log("use effect called");
    getData();
  },[]);

  const getData = async () => {
    //use Allows cors chrome extension to use api's from other websites
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //optinal chaining
    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants,"restaurants from parent");
    // Important note: component is rerenderd after a state variable is updated
    setListOfRestaurant(restaurants);
    // Copy of restaurants
    setFilteredRestaurant(restaurants);
  }

  // showing loader untill the page loads with actuall data
  // conditional renderring
  // if(listOfRestaurant.length === 0) {
  //   return <Shimmer />
  // }

  console.log("body is rendered first and then useEffect is called");

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={(e) => {
            console.log("JSX is rendered first and then useEffect is called");
            //filter logic for average rating
            const filteredList = listOfRestaurant.filter((res) => res?.info?.avgRating > 4.5);
            setFilteredRestaurant(filteredList);
            // setListOfRestaurant(filteredList); 
            console.log(
                filteredList,
              "UI not update but res if filtered, how to do it"
            );
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button onClick={() => {
            //fiter the cards based on search value
            //get the search text
            const filteredList = listOfRestaurant.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(filteredList)
            // setListOfRestaurant(filteredList);
            setFilteredRestaurant(filteredList);
            console.log(searchText);
          }}>Search</button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCards key={restaurant?.info?.id} resData={restaurant} />
        ))}
        {/* <RestaurantCards name="Meghana Foods" cuisine="Biryani, North Indian" rating="3.4 stars" time="38 minutes"/>
                        <RestaurantCards name="Andhra Mess" cuisine="Andhra Style" rating="4 stars" time="32 minutes"/> */}
      </div>
    </div>
  );
};

export default Body;
