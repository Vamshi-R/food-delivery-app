import User from "./User";
import {useEffect} from "react";
import ClassUser from "./ClassUser";

const About = () => {

    useEffect(()=>{
        let timer = setInterval(() => {
        },1000)

        //called on unmounting
        return(() => {
            clearInterval(timer)
        })
    },[]);

    return (
        <div className="About">
            {/* functional component */}
            {/* <User /> */}
            {/* class based component */}
            <ClassUser />
        </div>
    )
}

export default About;