export default function WatchedMovie({ movie }) {
  const { title, poster, imdbRating, userRating } = movie;

  return (
    <>
      <div className="movie watched-movie">
        <h1 className="title">{title}</h1>
        <div className="movie-image watched-movie-image">
          <img src={poster} alt={`${title} poster`} />
        </div>
        <p>{imdbRating} IMDB Rating</p>
        <h3>Your Rating</h3>
        <div className="rating watched-movie-rating">
          <div className="stars-in ">
            <span className="watched-movie-user-rating">{userRating}</span>
          </div>
        </div>
      </div>

      <div className="cl">&nbsp;</div>
    </>
  );
}
