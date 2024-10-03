import React from "react";
import { createRoot } from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://tse3.mm.bing.net/th?id=OIP.DJXkSF9B--LYE8SM7M8yCAHaHa&pid=Api&P=0&h=180" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

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
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {
                resObj.map((restaurant) => (
                    <RestaurantCards key={restaurant?.id} resData={restaurant} />      
                ))
            }
            {/* <RestaurantCards name="Meghana Foods" cuisine="Biryani, North Indian" rating="3.4 stars" time="38 minutes"/>
            <RestaurantCards name="Andhra Mess" cuisine="Andhra Style" rating="4 stars" time="32 minutes"/> */}
        </div>
      </div>
    );
}

/**
 * Inline styles
 * another example style = {{backgrondColor: red}}
 * first curly braces suggests there is some javascript code
 * second curly brace is a javascript object 
 */
const cardStyle = {
    backgroundColor : "#f0f0f0",
}

const resObj =  [
        {
            id:1,
            name: 'Meghana Foods',
            cuisine: ['Biryani','sea foods', 'north indian'],
            rating: '3.8 stars',
            time: '38 minutes'
        },
        {
            id:2,
            name: 'Kannur Foods',
            cuisine: ['Biryani','sea foods', 'south indian'],
            rating: '4 stars',
            time: '25 minutes'
        },
        {
            id:3,
            name: 'Andhrawala Foods',
            cuisine: ['Hyderabad Biryani','sea foods', 'south indian'],
            rating: '4.2 stars',
            time: '18 minutes'
        }
];


/**
 * Difference of syntax 
 * src = "some string"
 * src = {some string + to be concated value}
 * 
 */
const RestaurantCards = (props) => {
    console.log(props); //its an JS object
    // const {rating, time} = props; // destructuring props
    const {resData} = props;
    const {name,cuisine,rating,time} = resData;
    return (
        <div className="res-cards" style={cardStyle}>
            <img 
            src="https://b.zmtcdn.com/data/dish_photos/f73/63ae1c6e8b2cfff4b2859d061bc41f73.jpg?fit=around|130:130&crop=130:130;*,*"
            alt="res-logo"
            style={{width:100 + '%'}}

              />
            {/* <h3>{props.name}</h3>
            <h4>{props.cuisine}</h4> */}
            <h3>{name}</h3>
            <h4>{cuisine.join(", ")}</h4>
            <h4>{rating}</h4>
            <h4>{time}</h4>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />); 