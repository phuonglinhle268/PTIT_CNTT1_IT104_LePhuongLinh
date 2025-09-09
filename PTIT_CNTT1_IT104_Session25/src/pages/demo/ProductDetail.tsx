import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const result = useParams();
  console.log("Id: ", window.location.pathname.split("/")[2]);
  console.log("result: ", result);

  return <div>ProductDetail</div>;
}