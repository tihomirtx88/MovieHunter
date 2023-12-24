import { Link } from "react-router-dom";


export default function Header({children}) {
  return (
    <div id="header">
      <h1 id="logo">
        <Link to="#">MovieHunter</Link>
      </h1>
         {children}
    </div>
  );
}
