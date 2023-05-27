import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState("");
  useEffect(()=> {
    axios
    // .get("https://dummyjson.com/products/1")
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((resp) => {
        setData(resp.data[10].name);
        console.log("API WAS CALLED");
    });
    }, []);
    return <div><h1>Hello there {data}</h1> </div>;
  }

export default Axios;
