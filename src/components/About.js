import User from "./User";
import {useEffect} from "react";
import ClassUser from "./ClassUser";

const About = () => {

    useEffect(()=>{
        // console.log("About page useEfect -> parent component")
        // console.log("parent component did mount")
        let timer = setInterval(() => {
            console.log("Namste React")
        },1000)

        //called on unmounting
        return(() => {
            clearInterval(timer)
            console.log("use effect return called on unmounting")
        })
    },[]);

    return (
        <div className="About">
            {console.log("parent render")}
            {/* functional component */}
            {/* <User /> */}
            {/* class based component */}
            <ClassUser />
        </div>
    )
}

export default About;