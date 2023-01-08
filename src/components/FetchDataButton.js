import { useState } from "react";
import axios from 'axios';

function ButtonFetchData() {
    const [datas, setData] = useState([]);
    const GetData = () =>{
      // axios.get("http://api.quotable.io/random")
      axios.get("/api/courses")
      // axios.get("http://localhost:3010/api/courses")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      }).catch(err => {
        console.log(err);
      }, []);
    };
    return(
        <div>
        <button onClick={GetData}>Get Data</button>
        {datas.map(data =>(<li key={data.id}>{data.name}</li>))}
        {/* { <p>{datas}</p> } */}
        </div>
     );
}
export default ButtonFetchData;