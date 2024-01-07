import { Link } from "react-router-dom";
import Search from "./Search";
import { useContext } from "react";
import { MoviesContext } from "../../App";

export default function SubNavigation() {
  const {query, setQuery} = useContext(MoviesContext);
  return (
    <div id="sub-navigation">
      <ul>
        <li>
          <Link to="/watched">WATCHED MOVIES</Link>
        </li>
        <li>
          <Link to="#">LATEST TRAILERS</Link>
        </li>
        <li>
          <Link to="#">TOP RATED</Link>
        </li>
        <li>
          <Link to="#">MOST COMMENTED</Link>
        </li>
      </ul>
      <Search query={query} setQuery={setQuery}/>
    </div>
  );
}
