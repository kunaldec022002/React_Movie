import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerleft">
        <Link
          to={"/"}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          alt=""
          className="header_icon"
        />

        <Link to={"/movies/popular"} style={{textDecoration:'none'}}>
          <span>Popular</span>
        </Link>

        <Link to={"/movies/top_rated"} style={{textDecoration:'none'}}>
          <span>Top rated</span>
        </Link>

        <Link to={"/movies/upcoming"} style={{textDecoration:'none'}}>
          <span>Upcoming</span>
        </Link>
      </div>
    </div>
  );
}
