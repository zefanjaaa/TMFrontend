import { useState, useCallback, useEffect } from "react";
import axios from "axios";

const TestComponent = () => {
  const [data, setData] = useState([]);

  const getData = useCallback(() => {
    axios
      .get("http://localhost:5005/api/recipes")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getData();
    console.log("data", data);
  }, []);

  return (
    <div>
      <h1>Test Component</h1>
      {data.map((data) => (
        <div key={data._id}>
          <p key={data._id}>{data.Title}</p>
          {data.Image.map((img, index) => (
            <img key={index} src={img} alt="recipe" />
          ))}

          <p>{data.Description}</p>
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
