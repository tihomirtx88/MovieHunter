import { Link } from "react-router-dom";

export default function Movie({movie, onSelectMovie}) {

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;
  return (
    <>
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">{title}</span>
          </span>{" "}
          <Link to="#">
            <img src={poster} alt="" />
          </Link>{" "}
        </div>
        <div className="rating">
          <p>{imdbRating}</p>
          <div className="stars">
            <div className="stars-in"> </div>
          </div>
          <span className="comments">{actors}</span>{" "}
        </div>
      </div>
    </>
  );
}
