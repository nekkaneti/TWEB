import React from "react";
import "./SelectedMovie.css";
import SearchIcon from "./search.svg";


const SelectedMovie = (props) => {
  return (
    <div className="selectedMovie">
      <img src={SearchIcon} className="closeMovie" onClick={() => props.setMovieClicked(false)}/>
      <h1 className="selectedTitle">{props.selectedMovie.Title}</h1>
      <img
        className="selectedImage"
        src={
          props.selectedMovie.Poster !== "N/A"
            ? props.selectedMovie.Poster
            : "http://via.placeholder.com/400"
        }
        alt={props.selectedMovie.Title}
      />
    </div>
  )
};

export default SelectedMovie;
