import React from "react";
import User from "./User";

class ClassUser extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            userInfo: {},
            count: 0
        }
    }

    async componentDidMount () {
        const data = await fetch("https://api.github.com/users/Vamshi-R");
        const json = await data.json();
        this.setState({
            userInfo: json,
            count: this.state.count++
        })
    //    this.timer =  setInterval(() => {
    //     },1000)
        // place for API call
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.count !== prevState.count) {}
    }

    componentWillUnmount() {
        // clearInterval(this.timer);
    }

    render () {
        return (
            <div className="About">
            {/* functional component */}
            <User />
        </div>
        );
    }
}

export default ClassUser;