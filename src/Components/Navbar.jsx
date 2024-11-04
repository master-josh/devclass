import React, { useContext } from "react";
import { countcontext } from "../Context";

function Navbar() {
  const [count] = useContext(countcontext);
  return (
    <div>
      <h1>Nav comp</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default Navbar;
