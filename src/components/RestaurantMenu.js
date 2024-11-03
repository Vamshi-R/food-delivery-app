import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = (props) => {
    const contentStyle = {
        color: "red",
        textDecoration: "underline",
        margin:0
    }
    const {resId} = useParams();
    //671928,656392
    // lets create a custom hook that does fetchData logic
    // we will remove state variables as well
    // Now with useRestaurantMenu() custom hook component single responsibility is to display menu
    // data is fetched from useRestaurantMenu() custom hook
    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer />
    const {name, avgRating, totalRatingsString , costForTwoMessage, cuisines} = resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category = [];
    itemCards.forEach(cat => category.push(cat?.card?.info?.category));
    const uniqueArray = [...new Set(category)];

    return (
      <div className="Menu">
        <h1 style={{ margin: 0, marginTop: "5px" }}>{name}</h1>
        <h2 style={{ margin: 0 }}>
          {avgRating} ({totalRatingsString}) - {costForTwoMessage}
        </h2>
        <p style={contentStyle}>{cuisines.join()}</p>
        {uniqueArray.map((cat) => (
          <>
            <h3>{cat}</h3>
            <ul>
              {itemCards.map((item) =>
                item.card?.info?.category === cat ? (
                  <li key={item.card?.info?.id}>
                    {item.card?.info?.name}
                     - {"Rs."}
                    {item.card?.info?.price}
                  </li>
                ) : (
                  <></>
                )
              )}
            </ul>
          </>
        ))}
      </div>
    );
}

export default RestaurantMenu;