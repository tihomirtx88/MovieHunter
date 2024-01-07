import Header from "../Header/Header";
import Social from "../Header/Social";
import Navigation from "../Header/Navigation";
import SubNavigation from "../Header/SubNavigation";
import Main from "./Main";
import Loader from "../Header/Loader";
import MainContent from "./MainContent";
import Coming from "./Coming";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { MoviesContext } from "../../App";

export default function HomePage(){
  const {isLoading, error} = useContext(MoviesContext);
   return(
    <div className="shell">
    <>
      <Header>
        <Social />
        <Navigation />
        <SubNavigation/>
      </Header>
      <Main>
         {isLoading && <Loader/>}
         {!error && !isLoading &&  <MainContent/>}
        <Coming />
       
      </Main>
      <Footer />
    </>
  </div>
   );
};