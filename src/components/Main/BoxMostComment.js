import { Link } from "react-router-dom";

export default function BoxMostComment() {
  return (
    <div className="box">
      <div className="head">
        <h2>MOST COMMENTED</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">HOUSE</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie13.jpg" alt="" />
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
            <span className="name">VACANCY</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie14.jpg" alt="" />
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
            <span className="name">MIRRORS</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie15.jpg" alt="" />
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
            <span className="name">THE KINGDOM</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie16.jpg" alt="" />
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
            <span className="name">MOTIVES</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie17.jpg" alt="" />
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
            <span className="name">THE PRESTIGE</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie18.jpg" alt="" />
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
