import { useContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigation from "../Header/Navigation";
import Social from "../Header/Social";
import SubNavigation from "../Header/SubNavigation";
import WatchedMovie from "./WatchedMovie";
import { MoviesContext } from "../../App";

export default function WatchedMovieList() {
  const { onDeletedWatched, watched} = useContext(MoviesContext);
  return (
    <div className="shell">
      <>
        <Header>
          <Social />
          <Navigation />
          <SubNavigation/>
        </Header>
        <ul className="list watched-movie-wrapper">
          {watched.map((movie) => (
            <WatchedMovie
              movie={movie}
              key={movie.imdbID}
              onDeletedWatched={onDeletedWatched}
            />
          ))}
        </ul>

        <Footer />
      </>
    </div>
  );
}
