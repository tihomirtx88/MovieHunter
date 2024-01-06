import { Link } from "react-router-dom";
import Search from "./Search";

export default function SubNavigation({query, setQuery}) {
  return (
    <div id="sub-navigation">
      <ul>
        <li>
          <Link to="#">WATCHED MOVIES</Link>
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
