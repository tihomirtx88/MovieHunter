import { Link } from "react-router-dom";

export default function News() {
  return (
    <div id="news">
      <div className="head">
        <h3>NEWS</h3>
        <p className="text-right">
          <Link to="#">See all</Link>
        </p>
      </div>
      <div className="content">
        <p className="date">12.04.09</p>
        <h4>Disney's A Christmas Carol</h4>
        <p>
          "Disney's A Christmas Carol," a multi-sensory thrill ride
          re-envisioned by Academy Award®-winning filmmaker Robert Zemeckis,
          captures...{" "}
        </p>
        <Link to="#">Read more</Link>{" "}
      </div>
      <div className="content">
        <p className="date">11.04.09</p>
        <h4>Where the Wild Things Are</h4>
        <p>
          Innovative director Spike Jonze collaborates with celebrated author
          Maurice Sendak to bring one of the most beloved books of all time to
          the big screen in "Where the Wild Things Are,"...
        </p>
        <Link to="#">Read more</Link>{" "}
      </div>
      <div className="content">
        <p className="date">10.04.09</p>
        <h4>The Box</h4>
        <p>
          Norma and Arthur Lewis are a suburban couple with a young child who
          receive an anonymous gift bearing fatal and irrevocable consequences.
        </p>
        <Link to="#">Read more</Link>{" "}
      </div>
    </div>
  );
}
