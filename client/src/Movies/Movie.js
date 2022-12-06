import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, NavLink, Switch, useParams, useRouteMatch } from "react-router-dom";
import MovieCard from "./MovieCard";

// useHistory hook @ 21:00 in guided project.

export default function Movie(props) {
  const { addToSavedList } = props;
  const [movie, setMovie] = useState();

  const { id } = useParams();
  console.log(id);
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  const { url } = useRouteMatch();
  console.log(url);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/movies/${id}`) // Study this endpoint with Postman
      .then((response) => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        console.log(response.data);
        return setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [id]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div
        className="save-button"
        onClick={() => {
          addToSavedList(id);
        }}
      >
        Save
      </div>
    </div>
  );
}
