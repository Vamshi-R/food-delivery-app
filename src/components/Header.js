import { useState } from "react";
import {LOGO_URL} from "../utils/constants" // named import expample

const Header = () => {
    let btnName = "Login";
    //variable and setter function
    const [btnNameReact, setBtnNameReact] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button 
                    className="Login" 
                    onClick={() => {
                        console.log("login button triggered")
                        // btnName = "Logout"

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