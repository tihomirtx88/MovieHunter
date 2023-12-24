import { Link } from "react-router-dom";
import Movie from "./Movie";

export default function BoxByTitle({movies, onSelectMovie}) {
  return (
    <div className="box">
      <div className="head">
        <h2>Movies by title</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>

      {movies?.length > 0 ? (
         <ul style={{display:"flex"}}>
         {movies?.slice(0,6).map((movie) => (
           <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie}/>
         ))}
          
       </ul>
      ) : (
         <div className="box-movies-by-title">
            Find your favorite movie by title 
         </div>
       )}


      
      <div className="cl">&nbsp;</div>
    </div>
  );
}
