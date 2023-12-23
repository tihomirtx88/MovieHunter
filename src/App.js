import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navigation from "./components/Header/Navigation";
import Social from "./components/Header/Social";
import SubNavigation from "./components/Header/SubNavigation";
import Coming from "./components/Main/Coming";
import Main from "./components/Main/Main";
import MainContent from "./components/Main/MainContent";
import News from "./components/Main/News";

function App() {
  return (
    <div id="shell">
      <>
        <Header>
          <Social />
          <Navigation />
          <SubNavigation />
        </Header>
        <Main>
          <MainContent />
          <News />
          <Coming />
        </Main>
        <Footer />
      </>
    </div>
  );
}

export default App;
