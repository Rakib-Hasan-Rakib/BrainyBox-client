import React from "react";
import ToyProvider from "./ToyProvider";

const MathTab = ({ toys }) => {
  console.log(toys);
  return ToyProvider(toys);
};

export default MathTab;
