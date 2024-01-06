import BoxByTitle from "./BoxByTitle";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import WatchedMovies from "./WatchedMovies";
import Loader from "../Header/Loader";
import ErrorMessage from "../Header/ErrorMessage";

export default function MainContent({movies, watched, onDeletedWatched,selectedId, oncloseHandler, onAddWatched, onSelectMovie, isLoading, error}) {
  return (
    <div id="content">
      {isLoading && <Loader/>}
      {!isLoading && !error && <MovieList movies={movies} onSelectMovie={onSelectMovie}/>}
      {error && <ErrorMessage message={error}/>}
      {/* <BoxByTitle movies={movies}/>
      <WatchedMovies watched={watched} onDeletedWatched={onDeletedWatched}/> */}
      {selectedId && <MovieDetails selectedId={selectedId} oncloseHandler={oncloseHandler} onAddWatched={onAddWatched} watched={watched}/>}

   
    </div>
  );
}
