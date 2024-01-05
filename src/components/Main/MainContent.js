import BoxByTitle from "./BoxByTitle";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";
import WatchedMovies from "./WatchedMovies";

export default function MainContent({movies, watched, onDeletedWatched,selectedId, oncloseHandler, onAddWatched, onSelectMovie}) {
  return (
    <div id="content">
      <MovieList movies={movies} onSelectMovie={onSelectMovie}/> 
      {/* <BoxByTitle movies={movies}/>
      <WatchedMovies watched={watched} onDeletedWatched={onDeletedWatched}/> */}
      <MovieDetails selectedId={selectedId} oncloseHandler={oncloseHandler} onAddWatched={onAddWatched} watched={watched}/>
   
    </div>
  );
}
