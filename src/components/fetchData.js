import { useState } from "react";
import axios from 'axios';

function ApiData() {
    const [data, setData] = useState("");
      fetch("/api/courses")
      .then(res => {
        console.log(res.json());
        return res.json();      
      }).then(res => {
        return setData(res.name)
      })
    return(
        <div>
        { <p>{data}</p> }
        </div>
     );
}
export default ApiData;