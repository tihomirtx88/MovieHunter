import { useEffect, useState } from "react";
const key = "a21159f6";

export default function useFetchAll(callBack) {
  const [moviesAll, setMovies] = useState([]);
  const [isLoadingAll, setIsLoading] = useState(false);
  const [errorAll, setError] = useState("");

  useEffect(() => {
    callBack?.();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY5MjQ2MmQyMWQzNTNlYzZmMDBjYTYwM2ZkMGEwMSIsInN1YiI6IjY1ODcwMTU3MDcyMTY2Njc3ZmE1NzM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JZyyvosf8UF3-d8hVGYboqV0ZM_rbnkY-XEs-_-dT8'
          }
        });

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        console.log(data.results);

        setMovies(data.results);
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

      fetchMovies();
      
  }, []);
  return {isLoadingAll, moviesAll, errorAll};
}
