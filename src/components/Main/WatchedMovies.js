import { Link } from "react-router-dom";

export default function WatchedMovies({ onSelectMovie}) {
  return (
    <div className="box">
      <div className="head">
        <h2>TOP RATED</h2>
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
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">MAGNETO</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie8.jpg" alt="" />
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
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">KUNG FU PANDA</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie9.jpg" alt="" />
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
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">EAGLE EYE</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie10.jpg" alt="" />
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
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">NARNIA</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie11.jpg" alt="" />
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
      <div className="movie last">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">ANGELS &amp; DEMONS</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie12.jpg" alt="" />
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
