import {useEffect, useState} from "react";
import Shimmer from "./Shimmer"

const User = (props) => {
    // const {name, place, email} = props;
    const [user, setUser] = useState(null);
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    // console.log(`${name} child contructor`);

    useEffect(()=>{
        // do domething when count 1 updated
        // console.log("User page useEfect -> child component")
        // console.log(`${name} child component did mount`)
        getUsers();
    },[count1])

    useEffect(() => {
      // do domething when count 2 updated
    },[count2])

    useEffect(() => {
      //do something when count1 or count2 is updated
    },[count2,count1])

    getUsers = async () => {
        const data = await fetch("https://api.github.com/users/Vamshi-R");
        const json = await data.json();
        setUser(json)
    }
    console.log(user)

    if(user === null) return <Shimmer />
    const {name,company,location,bio} = user;
    return (
      <div className="user-cards">
        {/* {console.log(`${name} child render`)} */}
        <div className="user-profile">
          <h3>This is React web development learning.</h3>
          <p>Name: {name}</p>
          <p>Company: {company}</p>
          <p>Location: {location}</p>
          <p>Bio: {bio}</p>
        </div>
      </div>
    )
}

export default User;