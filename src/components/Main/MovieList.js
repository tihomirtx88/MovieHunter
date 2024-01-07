import { Link } from "react-router-dom";
import Movie from "./Movie";

export default function MovieList({movies, onSelectMovie}) {
  return (
    <div className="box">
      <div className="head">
        <h2 className="move-page-title">movie List</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      {movies.length > 0 ? 
      (
        <ul className="list list-movies">
           {movies.map((movie) => (
               <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
           ))}
      </ul>
      ) 
      : 
      (
        <div className="favorite-movies-section">
          <p>Search to find you favorites movies</p>
          <img src={require('./../../images/favorite-movies.jpg')} alt="" />
        </div>
      )}
      <div className="cl">&nbsp;</div>
    </div>
  );
}
