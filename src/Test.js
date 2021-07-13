import axios from "axios";
import React, { useEffect } from "react";
import { instance } from "./axios";

function Test() {
  useEffect(() => {
    axios
      .request(instance)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      <h1>I m test</h1>
    </div>
  );
}

export default Test;
