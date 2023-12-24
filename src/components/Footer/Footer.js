import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div id="footer">
        <p className="lf">
          Copyright © 2010 <Link to="#">Tihomir</Link> - All Rights Reserved
        </p>
        <p className="rf">
          Design by <a href="https://github.com/tihomirtx88">Tihomir Zhelyazkov</a>
        </p>
        <div style={{ clear: "both" }} />
      </div>
    );
};