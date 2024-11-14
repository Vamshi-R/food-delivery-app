import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=> {
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        // setResInfo(json?.data);
        setResInfo(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    }
    return resInfo;
}

export default useRestaurantMenu
