import { Link } from "react-router-dom";

export default function Coming(){
  return(
    <div id="coming">
    <div className="head">
      <h3>
        COMING SOON<strong>!</strong>
      </h3>
      <p className="text-right">
        <Link to="#">See all</Link>
      </p>
    </div>
    <div className="content">
      <h4>The Princess and the Frog </h4>
      <Link to="#">
        <img src="css/images/coming-soon1.jpg" alt="" />
      </Link>
      <p>
        Walt Disney Animation Studios presents the musical "The Princess and
        the Frog," an animated comedy set in the great city of New
        Orleans...
      </p>
      <Link to="#">Read more</Link>{" "}
    </div>
    <div className="cl">&nbsp;</div>
    <div className="content">
      <h4>The Princess and the Frog </h4>
      <Link to="#">
        <img src="css/images/coming-soon2.jpg" alt="" />
      </Link>
      <p>
        Walt Disney Animation Studios presents the musical "The Princess and
        the Frog," an animated comedy set in the great city of New
        Orleans...
      </p>
      <Link to="#">Read more</Link>{" "}
    </div>
  </div>
  );
};