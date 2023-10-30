import React, { useState, useEffect } from "react";
import axios from "axios";

const TestComponent = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:5005/api/recipes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Test Component</h1>
      {data.map((data) => (
        <p key={data._id}>{data.Title}</p>
      ))}
    </div>
  );
};

export default TestComponent;
