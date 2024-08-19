import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component{
    constructor(props){
        super(props);
        console.log("1. Parent's constructor.");
    }

    componentDidMount(){
        console.log("6. Parent's did mount.");
    }

    componentWillUnmount(){
        //called when we're leaving the component
        console.log(`8. Parent's will unmount.`);
    }//componentWillUnmount


    render(){
        console.log("2. Parent's render.");

        return( 
            <div className="about">
                <h2>About us</h2>
                {/* <User child={"First"}/> */}
                {/* <User child={"Second"}/> */}
                <UserClass/>
               </div>
            )
    }//render
}

export default About;
