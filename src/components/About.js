import { Component } from "react";
//import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";


class About extends Component{
    constructor(props){
        super(props);

        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("parent component did mount");
    }


render(){
    //console.log("parent render");
    return(
        <div>
            <h1>About class Components</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                {({loggedInUser}) => ( 
                <h1 className="text-xl font-bold">{loggedInUser}</h1>
                )} 
                </UserContext.Consumer>
                
            </div>
            <h2>This is namaste react web series</h2>
            {/* <User name={"Akshay saini (function)"} /> */}
            <UserClass name={"Akshay saini (classes)"} location={"Dehradun class"}/>
            
        </div>
    );
}
    
};
export default About;