//Use effect is used primarly for making API calls
import React, {useState, useEffect} from "react";
import axios from "axios";

export const EffectTutorial = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
          setData(response.data[0].email);
          console.log("API WAS CALLED");
        });
    }, []);
  
    return (
      <div>
        Hello World
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click
        </button>
      </div>
    );
  }