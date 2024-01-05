import { useState } from "react";

export default function Main({children}) {
  return (
    <div id="main">
      {children}
      <div className="cl">&nbsp;</div>
    </div>
  );
}
