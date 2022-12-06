import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movies } = props;
  console.log(movies);

  const history = useHistory();

  return (
    movies && (
      <div className="movie-list">
        {props.movies.map((movie) => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    )
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;
  const { url } = useRouteMatch();
  console.log(url, id, `${url}movies/${id}`);

  return (
    <Link to={`${url}movies/${id}`}>
      <MovieCard movie={props.movie} />
    </Link>
  );
}
