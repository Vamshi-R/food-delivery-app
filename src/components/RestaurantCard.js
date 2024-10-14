import {RES_LOGO} from "../utils/constants" //named import

/**
 * Inline styles
 * another example style = {{backgrondColor: red}}
 * first curly braces suggests there is some javascript code
 * second curly brace is a javascript object 
 */
const cardStyle = {
    backgroundColor : "#f0f0f0",
}

/**
 * Difference of syntax 
 * src = "some string"
 * src = {some string + to be concated value}
 * 
 */
const RestaurantCards = (props) => {
    // console.log(props,"restaurant card prop"); //its an JS object
    // const {rating, time} = props; // destructuring props
    const {resData} = props;
    const {info} = resData;
    const {name,cloudinaryImageId,cuisines,avgRating,sla} = info;
    const {deliveryTime} = sla;
    return (
        <div className="res-cards" style={cardStyle}>
            <img 
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt="res-logo"
            style={{width:100 + '%'}}

              />
            {/* <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4> */}
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCards;