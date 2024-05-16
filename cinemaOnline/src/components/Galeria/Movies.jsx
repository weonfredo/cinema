import React from "react";
import "./Movies.css";

function Movies() {
  return (
    <>
      {/* Body section */}
      <body>
        {/* Content */}
        <div className="content">
          {/* Library list */}
          <ul className="library"></ul>

          {/* Overlays */}
          <div className="overlay-page"></div>
          <div className="overlay-summary"></div>
        </div>

        {/* JavaScript imports */}
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
        <script src="./Movies.js"></script>
      </body>
    </>
  );
}
export default Movies;
