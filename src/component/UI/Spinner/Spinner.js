import React from 'react';
import HashLoader from "react-spinners/HashLoader";

export default function Spinner() {
  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <HashLoader color={"#A1C4CE"} css={style} size={150}/>
  );
}