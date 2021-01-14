import React, { useState } from 'react';
import HashLoader from "react-spinners/HashLoader";

export default function Spinner() {
  const [color, setColor] = useState("#A1C4CE");
  const [size, setSize] = useState(150);

  const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <HashLoader color={color} css={style} size={size}/>
  );
}