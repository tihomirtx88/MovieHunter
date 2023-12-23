import { Link } from "react-router-dom";

export default function SubNavigation(){
    return(
        <div id="sub-navigation">
        <ul>
          <li>
            <Link to="#">SHOW ALL</Link>
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
        <div id="search">
          <form action="#" method="get" acceptCharset="utf-8">
            <label htmlFor="search-field">SEARCH</label>
            <input
              type="text"
              name="search field"
              defaultValue="Enter search here"
              id="search-field"
              className="blink search-field"
            />
            <input type="submit" defaultValue="GO!" className="search-button" />
          </form>
        </div>
      </div>
    );
};