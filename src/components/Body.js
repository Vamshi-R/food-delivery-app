import RestaurantCards, { withPromotedRestaurant } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";

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
  //Higher order component
  const PromotedRestaurantCard = withPromotedRestaurant(RestaurantCards);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //use Allows cors chrome extension to use api's from other websites
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optinal chaining
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    restaurants.forEach((res, index) => {
      if (index % 2 === 0) {
        res.info["promoted"] = true;
      } else {
        res.info["promoted"] = false;
      }
    });

    // Important note: component is rerenderd after a state variable is updated
    setListOfRestaurant(restaurants);
    // Copy of restaurants
    setFilteredRestaurant(restaurants);
  };

  // showing loader untill the page loads with actuall data
  // conditional renderring
  // if(listOfRestaurant.length === 0) {
  //   return <Shimmer />
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <>
        <h1>You are Offline!!,Please check your internet connection;</h1>
        <p>Message from custom hook</p>
        <p>
          Task Build a game to improve developer experience which internet goes
          offline.
        </p>
      </>
    );

    const data = useContext(UserContext);
    const {loggedInUser, setUserInfo} = data;
    console.log(data, "from body comp")


  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter-container">
        <button
          className="filter-button"
          onClick={(e) => {
            //filter logic for average rating
            const filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setFilteredRestaurant(filteredList);
            // setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //fiter the cards based on search value
              //get the search text
              const filteredList = listOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // setListOfRestaurant(filteredList);
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="user-container">
          <input
            type="text"
            className="userName"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="links"
            key={restaurant?.info?.id}
            to={"/restaurant/" + restaurant?.info?.id}
          >
            {restaurant?.info?.promoted ? (
              <>
                <PromotedRestaurantCard resData={restaurant} />
              </>
            ) : (
              <>
                <RestaurantCards
                  key={restaurant?.info?.id}
                  resData={restaurant}
                />
              </>
            )}
          </Link>
        ))}
        {/* <RestaurantCards name="Meghana Foods" cuisine="Biryani, North Indian" rating="3.4 stars" time="38 minutes"/>
                        <RestaurantCards name="Andhra Mess" cuisine="Andhra Style" rating="4 stars" time="32 minutes"/> */}
      </div>
    </div>
  );
};

export default Body;
