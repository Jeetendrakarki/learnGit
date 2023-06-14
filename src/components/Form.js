import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setdatalist } from "../NameSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [data, setdata] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setdata(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(setdatalist(data));
  };

  return (
    <div>
      <form action="" onSubmit={handleOnSubmit}>
        <input type="text" name="" onChange={handleOnChange} />
        <button>Add data</button>
      </form>
    </div>
  );
};
