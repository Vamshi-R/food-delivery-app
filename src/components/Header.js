import { useState, useEffect } from "react";
import {LOGO_URL} from "../utils/constants" // named import expample
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

const Header = () => {
    let btnName = "Login";
    //variable and setter function
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    const {loggedInUser, setUserInfo} = data;
    useEffect(() => {
    },[btnNameReact]);

    return (
        <div className="header flex justify-between">
            <div className="logo-container">
                <img className="logo w-56" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li> */}
                    <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    {onlineStatus && <li>LoggedInUser: { loggedInUser }</li>}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><Link to="/grocery">Grocery Lazy</Link></li>
                    <button 
                    className="Login" 
                    onClick={() => {
                        //setter function
                        const btn = btnNameReact === 'Login' ? 'Logout' : 'Login';
                        setBtnNameReact(btn)
                    }}
                    >
                        {/* {but react state variable does that} */}
                        {btnNameReact} 
                        {/* {btnName} Normal Js variable which did not re render UI on update */}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;