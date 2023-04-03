import React, { Fragment } from "react";
import "./Movie.module.css";
const Movie = ({ coverImg, title, rating, genres, summary }) => {
  return (
    <Fragment>
      <li>
        <img src={coverImg} alt={title} />
        <h2><span>영화제목</span></h2>
        <p>{title}</p>        
        <h2><span>평점</span></h2>
        <p>{rating} / 9</p>
        <h2><span>장르</span></h2>
        <div>
          {genres.map((genre, i) => (
            <span key={i}>{genre}</span>
          ))}
        </div>
        <h2><span>줄거리</span></h2>
        <p>{summary}</p>
      </li>
    </Fragment>
  );
};

export default Movie;
