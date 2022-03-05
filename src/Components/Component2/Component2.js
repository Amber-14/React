import React from "react";
// import "./Component2.css" ;
import "./Component2.scss" ;

const Component2 = function(props){
    return(
        <div className="Component2">
            <h1>Heading {props.heading}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
        </div>
    )
}

export default Component2