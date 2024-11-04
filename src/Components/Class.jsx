import React, { useEffect } from "react";

function Class({Setnumber , setdata}) {
    useEffect({

    },[])
  return (
    <div>
      <button onClick={() => setdata("DOG")}>Click</button>
      <button onClick={() => Setnumber(number - 1)}>-</button>
      <button onClick={() => Setnumber(number + 1)}>+</button>
    </div>
  );
}

export default Class;
