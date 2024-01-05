import { Link } from "react-router-dom";

export default function WatchedMovies({ watched, onDeletedWatched}) {
  return (
    <div className="box">
      <div className="head">
        <h2>Your already watched movies list</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">TRANSFORMERS</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie7.jpg" alt="" />
          </Link>{" "}
        </div>
        <div className="rating">
          <p>RATING</p>
          <div className="stars">
            <div className="stars-in"> </div>
          </div>
          <span className="comments">12</span>{" "}
        </div>
      </div>

      <div className="cl">&nbsp;</div>
    </div>
  );
}
