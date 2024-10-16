import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = (props) => {
    const contentStyle = {
        color: "red",
        textDecoration: "underline",
        margin:0
    }
    const {resId} = useParams();
    //671928,656392
    console.log(resId,"route params")
    const [menu, setMenu] = useState(null);
    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        const card = json?.data?.cards[2]?.card?.card?.info;
        console.log(json,"menu");
        setMenu(json?.data);
    }

    if(menu === null) return <Shimmer />
    const {name, avgRating, totalRatingsString , costForTwoMessage, cuisines} = menu?.cards[2]?.card?.card?.info;
    const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category = [];
    itemCards.forEach(cat => category.push(cat?.card?.info?.category));
    const uniqueArray = [...new Set(category)];
    console.log(itemCards,"itemCards");

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