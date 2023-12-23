import { Link } from "react-router-dom";

export default function Navigation(){
    return(
        <div id="navigation">
        <ul>
          <li>
            <Link className="active" to="#">
              HOME
            </Link>
          </li>
          <li>
            <Link to="#">NEWS</Link>
          </li>
          <li>
            <Link to="#">IN THEATERS</Link>
          </li>
          <li>
            <Link to="#">COMING SOON</Link>
          </li>
          <li>
            <Link to="#">CONTACT</Link>
          </li>
          <li>
            <Link to="#">ADVERTISE</Link>
          </li>
        </ul>
      </div>
    );
};