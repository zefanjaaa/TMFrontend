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
          <p className="text-2xl" key={data._id}>
            {data.Title}
          </p>
          {data.Image.map((img, index) => (
            <img className="w-40 h-40" key={index} src={img} alt="recipe" />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TestComponent;
