import React from "react";

function Head(props) {
  return (
    <div className="container text-center mt-3 mb-3 p-3">
      <h2>Some of the best Games in the world</h2>
      <hr className="border-secondary" style={{ maxWidth: "13rem" }}></hr>
      <hr className="border-secondary" style={{ maxWidth: "7rem" }}></hr>
      <div className='float-right'>
        <span className="text-muted">Sort by Score:</span>{" "}
        <button onClick={props.sortAsc} className="btn btn-sm">
          <img
            src="https://img.icons8.com/metro/16/000000/sort-up.png"
            alt="up"
          />
        </button>
        <button onClick={props.sortDsc} className="btn btn-sm">
          <img
            src="https://img.icons8.com/metro/16/000000/sort-down.png"
            alt="down"
          />
        </button>
      </div>
    </div>
  );
}

export default Head;
