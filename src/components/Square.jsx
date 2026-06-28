import { useState } from "react";
import "./Square.css"

export default function Square() {
  const [move, setMove] = useState()
  return (
    <>
      <div className="main">
        <div className="row">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="row">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
