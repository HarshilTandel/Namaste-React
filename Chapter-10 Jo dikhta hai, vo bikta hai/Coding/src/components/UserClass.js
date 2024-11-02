import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       
        this.timer = setInterval(() => {
            console.log("Namaste React");
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render() {
        return ( 
        <div>
            <h3>User class</h3>
        </div>)
    }
}

export default UserClass;