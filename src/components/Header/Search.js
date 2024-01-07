import { useRef } from "react";
import useKey from "../../hooks/useKey";

export default function Search({ query, setQuery }) {
    const inputElement = useRef(null);

    useKey('Enter', function(){
        if(document.activeElement === inputElement.current) return;
        inputElement.current.focus();
        setQuery("");
    });
  return (
    <div id="search">
      <form action="#" method="get" acceptCharset="utf-8">
        <label htmlFor="search-field">SEARCH</label>
        <input
          type="text"
          name="search field"
          placeholder="Search movies..."
          id="search-field"
          className="blink search-field"
          value={query}
          ref={inputElement}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </div>
  );
}
