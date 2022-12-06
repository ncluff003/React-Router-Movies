import React from "react";
import { useRouteMatch } from "react-router-dom";

export default function MovieCard(props) {
  const { id, title, director, metascore, stars } = props.movie;

  const { url } = useRouteMatch();

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      {/* This is the difference */}
      {url !== "/" && <h3>Actors</h3>}
      {url !== "/" &&
        stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
    </div>
  );
}
