import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import useKey from "../../hooks/useKey";
import Loader from "../Header/Loader";
import ErrorMessage from "../Header/ErrorMessage";
import StarsRating from "../../hooks/StartsRating";

const key = "a21159f6";

export default function MovieDetails({
  watched,
  selectedId,
  oncloseHandler,
  onAddWatched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState("");

  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchUserRating = watched.map(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

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

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year: Number(year),
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDesicion: countRef.current,
    };

    onAddWatched(newWatchedMovie);
    oncloseHandler();
  }

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsloading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&i=${selectedId}`
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching movie details");

        const data = await res.json();

        if (data.Response === "False")
          throw new Error("Movie information are not found");

        setMovie(data);
        setIsloading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsloading(false);
      }
    }

    getMovieDetails();
  }, [selectedId]);

  // Write coorect page title
  useEffect(() => {
    if (title) return;
    document.title = `Movie | ${title}`;

    //  Clean up function
    return function () {
      document.title = "MovieHunter";
    };
  }, [title]);

  useKey("Escape", oncloseHandler);

  return (
    <div className="details">
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <>
          <section className="top-section-details">
            <img src={poster} alt={`Poster of ${movie} movie`} />
            <button className="btm-back" onClick={() => oncloseHandler()}>
              Close
            </button>
          </section>
          <section className="bottom-section-details">
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{year}</p>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarsRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={() => handleAdd()}>
                      Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You rated this movie with {watchUserRating}
                  <span>⭐</span>
                </p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
}
