import React from "react";
import Component3 from "./Component3/Component3";

const Component1 = () =>{
    return(
        <div className="Component1">
            <h1>Heading 1</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </p>
            <Component3 />
        </div>
    )
}

export default Component1

/*
With default in export, it helps to change name where we r importing
*/

