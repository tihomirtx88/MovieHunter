import { Link } from "react-router-dom";
export default function BoxLatestTrailers() {
  return (
    <div className="box">
      <div className="head">
        <h2>LATEST TRAILERS</h2>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      <div className="movie">
        <div className="movie-image">
          {" "}
          <span className="play">
            <span className="name">X-MAN</span>
          </span>{" "}
          <Link to="#">
            <img src={require("../../images/movie1.jpg")} alt="" />
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
            <span className="name">SPIDER MAN 2</span>
          </span>{" "}
          <Link to="#">
            <img src={require("../../images/movie2.jpg")} alt="" />
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
            <span className="name">SPIDER MAN 3</span>
          </span>{" "}
          <Link to="#">
            <img src={require("../../images/movie3.jpg")} alt="" />
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
            <span className="name">VALKYRIE</span>
          </span>{" "}
          <Link to="#">
            <img ssrc={require("../../images/movie4.jpg")} alt="" />
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
            <span className="name">GLADIATOR</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie5.jpg" alt="" />
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
            <span className="name">ICE AGE</span>
          </span>{" "}
          <Link to="#">
            <img src="css/images/movie6.jpg" alt="" />
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
