import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

//This is the function or we can say the component that is loaded into the browser
export default function App() {
  //The value of the input variable keeps on changing therefore we are using the useState function
  let [input, setinput] = useState("/posts");
  let [datas, setdatas] = useState("Still Searching");

  //The use query function
  let { data, isLoading, error } = useQuery([input], () => {
    fetch(`http://localhost:7000${input}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setdatas(data);
        return data;
      })
      .catch((err) => {
        return err;
      });
  });

  return (
    <div>
      <h1>Jsoon Proxy Holder Api</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setinput(e.target.value);
        }}
      ></input>
      <pre>{datas}</pre>
    </div>
  );
}
