import { useEffect, useState } from "react";
const key = "a21159f6";


export default function useFetchByTitle(query, callBack) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    callBack?.();

    const controler = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${key}&s=${query}`,
          { signal: controler.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        setError("");
        setIsLoading(false);
      } catch (err) {
        // Prevent to JS catch API like error
        if (err.name !== "AbortError") {
          console.log(err.message);
          setError(err.message);
        }
      }finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
        setMovies([]);
        setError("");
        return;
      }

      fetchMovies();
      
    //   Cleanup
      return function(){
        controler.abort();
      };
  }, [query]);
  return {isLoading, movies, error};
}
