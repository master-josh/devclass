import React, { useState } from "react";
import Class from "./Class";

function Team() {
  const [data, setdata] = useState("CAT");
  const [number, setnumber] = useState(0);
  return (
    <div>
      <Class Setnumber={setnumber} setdata={setdata}/>
      <h1>{data}</h1>
      <h1>{number}</h1>
    </div>
  );
}

export default Team;
