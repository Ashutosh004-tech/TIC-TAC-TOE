import Cell from "./Cell";
import "./Square.css";

export default function Square() {
  return (
    <>
      <div className="main">
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
        <div className="row">
          <Cell />
          <Cell />
          <Cell />
        </div>
      </div>
    </>
  );
}
