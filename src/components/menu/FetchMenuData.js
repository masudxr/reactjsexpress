import React, {useState} from "react";
import LogIN from "./LogIn.js";

const FetchMenuData = () =>{
    const [data, setData] = useState('');

    return(
        <div>
            <h2>Login Value: {data} </h2>
            <LogIN setData={setData}/>
        </div>
    )
}
export default FetchMenuData;