import { Link } from "react-router-dom";

export default function Social(){
    return(
        <div className="social">
        {" "}
        <span>FOLLOW US ON:</span>
        <ul>
          <li>
            <Link className="twitter" to="#">
              twitter
            </Link>
          </li>
          <li>
            <Link className="facebook" to="#">
              facebook
            </Link>
          </li>
          <li>
            <Link className="vimeo" to="#">
              vimeo
            </Link>
          </li>
          <li>
            <Link className="rss" to="#">
              rss
            </Link>
          </li>
        </ul>
      </div>
    );
};