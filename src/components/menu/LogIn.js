import React, {useState, useEffect} from "react";


const LogIN = ({setData})=> {
    const myData = "XYZ";

return(
    <div>
    <button type="button" onClick={() => setData(myData)}>LogIn</button>
    </div>
    
)
}
export default LogIN;
