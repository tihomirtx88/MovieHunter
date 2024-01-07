import {  Route, Routes } from "react-router-dom";
import HomePage from "./components/Main/HomePage";
import WatchedMovieList from "./components/Main/WatchedMovieList";
import { createContext, useEffect, useState } from "react";
import UseFetchBytitle from './hooks/useFetchByTitle';
export const MoviesContext = createContext();


function App() {

  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  const { isLoading, movies, error } = UseFetchBytitle(query, handleCloseMovie);


  useEffect(() => {
    const localstoragedata = JSON.parse(localStorage.getItem("watched"));
    if (localstoragedata) setWatched(localstoragedata);
  }, []);

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(newWatched){
    setWatched((oldWatched) =>{
      const newState = [...oldWatched, newWatched];
      localStorage.setItem("watched", JSON.stringify(newState));
      return newState
    });
  };

  function handleDeletedWatched(id){
    setWatched((watched) => watched.filter((mov) => mov.imdbID !== id));
  };

  return (
    <MoviesContext.Provider value={{
      onSelectMovie: handleSelectMovie,
      onDeletedWatched: handleDeletedWatched,
      onAddWatched: handleAddWatched,
      oncloseHandler: handleCloseMovie,
      watched: watched,
      movies: movies,
      isLoading: isLoading,
      error: error,
      selectedId: selectedId,
      query:query,
      setQuery: setQuery
    }}>
      <Routes>
         <Route index element={<HomePage/>}/>
         <Route path="watched" element={<WatchedMovieList/>}/>
      </Routes>
    </MoviesContext.Provider>
  );
}

export default App;
