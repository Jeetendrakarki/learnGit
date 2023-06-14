import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const {datalist}=useSelector((state)=>state.datalist)
  return (
    <div>
      <ul>
        {datalist.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
