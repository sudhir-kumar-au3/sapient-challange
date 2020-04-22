import React from "react";

function SearchBox(props) {
  return (
    <div className="container-fluid sticky-top bg-dark nav-shadow pt-3">
      <div className="row">
        <div className="col-md-3 pl-md-5">
          <img
            src="https://img.icons8.com/wired/80/000000/xbox.png"
            alt="logo"
          />
        </div>
        <div className="col-md-6">
          <form>
            <fieldset className="form-group">
              <input
                type="text"
                value={props.query}
                className="form-control rounded-pill form-control-lg"
                placeholder="Search. . ."
                onChange={props.onChange}
              ></input>
            </fieldset>
          </form>
          <div className="text-center mb-4">
            <small className="text-white">
              Type the name of the game you want to look for.
            </small>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default SearchBox;
