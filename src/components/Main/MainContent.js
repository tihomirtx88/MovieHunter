import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import Loader from "../Header/Loader";
import ErrorMessage from "../Header/ErrorMessage";
import { useContext } from "react";
import { MoviesContext } from "../../App";

export default function MainContent() {
  const { isLoading, error, movies, onSelectMovie, selectedId, oncloseHandler, onAddWatched, watched} = useContext(MoviesContext);
  return (
    <div id="content">
      {isLoading && <Loader/>}
      {!isLoading && !error && <MovieList movies={movies} onSelectMovie={onSelectMovie}/>}
      {error && <ErrorMessage message={error}/>}
     {/* <BoxByTitle movies={movies}/> */}

      {selectedId && <MovieDetails selectedId={selectedId} oncloseHandler={oncloseHandler} onAddWatched={onAddWatched} watched={watched}/>}

   
    </div>
  );
}
