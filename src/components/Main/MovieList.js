import { Link } from "react-router-dom";
import Movie from "./Movie";

export default function MovieList({movies, onSelectMovie}) {
  return (
    <div className="box">
      <div className="head">
        <h2>movie List</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      <ul className="list list-movies">
           {movies.map((movie) => (
               <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
           ))}
      </ul>
      <div className="cl">&nbsp;</div>
    </div>
  );
}
