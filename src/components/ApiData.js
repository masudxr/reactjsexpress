import { useState } from "react";
import axios from 'axios';

function ApiData() {
    const [data, setData] = useState("");
      axios.get("/api")
      .then(res => {
        console.log('response.json:', res.data);
        setData(res.data)    
      }).catch(err => {
        console.log('Error Message:', err);
      })
    return(
        <div>
        { <p>{data}</p> }
        </div>
     );
}
export default ApiData;