import React, { useContext } from "react";
import { countcontext } from "../Context";
import Navbar from "./navBar";

function Parent() {
  const [count, setcount] = useContext(countcontext);
  return (
    <div>
      <Navbar />

      <h1>Parent</h1>
      <h1>{count}</h1>

      <button onClick={() => setcount(count + 1)}>Click</button>
    </div>
  );
}

export default Parent;
