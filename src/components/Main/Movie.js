export default function Movie({ movie, onSelectMovie }) {
  return (
    <>
      <li onClick={() => onSelectMovie(movie.imdbID)} key={movie.imdbID}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3 className="">{movie.Title}</h3>
        <div>
          <p className="movie-details-houm-page">
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </li>
    </>
  );
}
