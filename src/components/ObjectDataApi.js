import { useState } from "react";
import axios from 'axios';

function ObjectApiData() {
    const [datas, setData] = useState([]);
      axios.get("/api/courses")
      .then(res => {
        console.log('response.json:', res.data);
        setData(res.data)    
      }).catch(err => {
        console.log('Error Message:', err);
      }, [])
    return(
        <div>
            <ul>
                {datas.map(data =>(<li key={data.id}>{data.name}</li>))}
            </ul>
        {/* { <p>{datas}</p> } */}
        </div>
     );
}
export default ObjectApiData;