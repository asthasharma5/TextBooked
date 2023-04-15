import React, { useEffect, useState } from "react";
import axios from "axios";

import "./styles/dashboard.css";

function Dashboard() {
  const [data, setData] = useState([]);
  const [selectData, setSelectData] = useState({
    college: "",
    Branch: "",
    Year: " ",
    Subject: "",
  });
  console.log("data1234", data);
console.log(selectData)
  const handleSubmit = async () => {
    const result = await axios
      .post("http://localhost:5001/formdata",selectData)
      .then((res) => res.data)
      .catch((err) => err);
      setSelectData(result);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5001/formdata")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="block">
      <div>
        <select className="block1">
          <option>Select Collage</option>
          {data.map((item) => (
            <option key={item.id}>{item.college}</option>
          ))}
        </select>

        <select className="block1">
          <option>Select Collage</option>
          {data.map((item) => (
            <option key={item.id}>{item.Branch}</option>
          ))}
        </select>

        <select className="block1">
          <option>Select Year</option>
          {data.map((item) => (
            <option key={item.id}>{item.Year}</option>
          ))}
        </select>

        <select className="block1">
          <option>Select Subject</option>
          {data.map((item) => (
            <option key={item.id}>{item.Subject}</option>
          ))}
        </select>
        <button className="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
