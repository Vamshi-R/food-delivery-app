import React from "react";
import User from "./User";

class ClassUser extends React.Component {
    constructor (props) {
        console.log("child constructor called")
        super(props);
        this.state = {
            userInfo: {},
            count: 0
        }
    }

    async componentDidMount () {
        console.log("child componentDidMount called");
        const data = await fetch("https://api.github.com/users/Vamshi-R");
        const json = await data.json();
        console.log(this.state)
        this.setState({
            userInfo: json,
            count: this.state.count++
        })
    //    this.timer =  setInterval(() => {
    //         console.log("Namaste React");
    //     },1000)
        // place for API call
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state,prevState)
        if(this.state.count !== prevState.count) {}
            console.log(this.state.count,prevState.count)
        console.log("child componentDidUpdate called")
    }

    componentWillUnmount() {
        console.log("child componentWillUnmount called");
        // clearInterval(this.timer);
    }

    render () {
        console.log("child render called")
        return (
            <div className="About">
            {console.log("parent render")}
            {/* functional component */}
            <User />
        </div>
        );
    }
}

export default ClassUser;