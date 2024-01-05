import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Social from "./components/Header/Social";
import SubNavigation from "./components/Header/SubNavigation";
import Coming from "./components/Main/Coming";
import Main from "./components/Main/Main";
import MainContent from "./components/Main/MainContent";
import News from "./components/Main/MovieDetails";
import { useFetchByTitle } from "./hooks/useFetchByTitle";
import Loader from "./components/Header/Loader";
import ErrorMessage from "./components/Header/ErrorMessage";
import MovieDetails from "./components/Main/MovieDetails";


const key = "a21159f6";

function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [watched, setWatched] = useState([]);

  // useEffect(() => {
  //   async function getFetch() {
    
  //     try {
  //       const res = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
  //         method: 'GET',
  //         headers: {
  //           accept: 'application/json',
  //           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjY5MjQ2MmQyMWQzNTNlYzZmMDBjYTYwM2ZkMGEwMSIsInN1YiI6IjY1ODcwMTU3MDcyMTY2Njc3ZmE1NzM5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9JZyyvosf8UF3-d8hVGYboqV0ZM_rbnkY-XEs-_-dT8'
  //         }
  //       });
  //       const data = await res.json();
  //       console.log(data.results, 'asdasdas');
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getFetch();
  // }, []);

  const { isLoading, movies, error } = useFetchByTitle(query, handleCloseMovie);


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
    <div id="shell">
      <>
        <Header>
          <Social />
          <Navigation />
          <SubNavigation query={query} setQuery={setQuery} />
        </Header>
        <Main>
           {isLoading && <Loader/>}
           {!error && !isLoading &&  <MainContent
            movies={movies}
            onSelectMovie={handleSelectMovie}
            watched={watched}
            onDeletedWatched={handleDeletedWatched}
            selectedId={selectedId}
            oncloseHandler={handleCloseMovie}
          />}
          <Coming />
         
        </Main>
        <Footer />
      </>
    </div>
  );
}

export default App;
