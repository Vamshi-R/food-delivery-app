import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(()=> {
        console.log("cuustom hook use effect called")
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch(MENU_URL + resId);
        const json = await data.json();
        setResInfo(json?.data);
        console.log("setter function called");
    }
    return resInfo;
}

export default useRestaurantMenu
