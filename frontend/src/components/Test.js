import React, { useState, useEffect } from "react";
import axios from "axios";

const Test = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:5000/getTest");
    console.log(res.data);
  };
  //   const [details, setDetails] = useState({ id: 1, name: "Test Subject 1" });
  //   axios
  //     .post("http://localhost:5000/postTest", {
  //       data: details,
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  return <h1>Test page</h1>;
};

export default Test;
