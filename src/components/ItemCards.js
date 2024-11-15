import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const ItemCards = ({itemCards}) => {

    const data = useContext(UserContext);
    const {loggedInUser} = data;
    return (
        <div className="item-cards">
            <div>LoggedInUser : {loggedInUser}</div>
            {
                itemCards.map((item,index) => (
                    <div key={index}>
                      <h3>{item?.card?.info?.name}</h3>
                      <div className="price">
                        <span>₹{item?.card?.info?.defaultPrice / 100}</span>
                        <span  style={
                            {
                               backgroundColor: item?.card?.info?.offerTags?.[0]?.backgroundColor,
                               textColor:item?.card?.info?.offerTags?.[0]?.textColor,
                               paddingLeft:'5px'
                            }
                            }>
                            <span>{item?.card?.info?.offerTags?.[0].title}</span>
                            <span>{item?.card?.info?.offerTags?.[0].subTitle}</span>
                        </span>
                      </div>
                      <p>{item?.card?.info?.description}</p>
                    </div>
                ))
            }
            <h1></h1>
        </div>
    )
}

export default ItemCards;