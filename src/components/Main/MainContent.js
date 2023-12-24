import BoxByTitle from "./BoxByTitle";
import BoxMostComment from "./BoxMostComment";
import WatchedMovies from "./WatchedMovies";

export default function MainContent({movies}) {
  return (
    <div id="content">
      <BoxByTitle movies={movies}/>
      <WatchedMovies />
      <BoxMostComment/>
    </div>
  );
}
