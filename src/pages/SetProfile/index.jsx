import React from "react";
import { useLocation } from "react-router-dom";

export default function SetProfile() {
  const location = useLocation();
  console.log(location.state);
  return <div>SetProfile</div>;
}
