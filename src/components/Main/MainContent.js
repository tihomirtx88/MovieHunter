import BoxLatestTrailers from "./BoxLatestTrailers";
import BoxTopRated from "./BoxTopRated";
import BoxMostComment from "./BoxMostComment";

export default function MainContent() {
  return (
    <div id="content">
      <BoxLatestTrailers/>
      <BoxTopRated/>
      <BoxMostComment/>
    </div>
  );
}
