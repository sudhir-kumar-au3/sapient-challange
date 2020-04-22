import React from "react";

function List(props) {
  return (
    <React.Fragment>
      <div className="col-md-4  mb-3 rounded">
        <div className="card-header bg-dark text-info ">
          <p className="card-title ">{props.editors_choice}</p>

          <div className="font-weight-bolder mb-2">{props.title}</div>
          <p className="font-smaller font-italic text-light">
            <ion-icon name="game-controller-outline"></ion-icon>&nbsp;
            <small>{props.platform}</small>
          </p>
        </div>
        <div className="card-body border-dark">
          <p className="card-text">
            <img
              src="https://img.icons8.com/doodle/24/000000/controller.png"
              alt="genre"
            />&nbsp;
            Genre:&nbsp;<em>{props.genre}</em>
          </p>
          <div className="card-text">
            <p className="text-primary">
              <img
                src="https://img.icons8.com/plasticine/24/000000/inspection.png"
                alt="score"
              />&nbsp;
              Review score : {props.score}/10{" "}
            </p>
            <img
              src="https://img.icons8.com/color/24/000000/date-to.png"
              alt="date"
            />&nbsp;
            Released in : {props.release_year}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default List;
