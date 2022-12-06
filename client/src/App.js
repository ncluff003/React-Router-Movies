import React, { useState, useEffect } from "react";
import { Route, NavLink, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";

import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieCard from "./Movies/MovieCard";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5001/api/movies") // Study this endpoint with Postman
        .then((response) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    return !saved.includes(movieList[id]) ? setSaved([...saved, movieList[id]]) : setSaved(saved);
  };

  console.log(saved);

  return (
    <div>
      <SavedList
        list={[
          /* This is stretch */
          ...saved,
        ]}
      />
      <div>
        Replace this Div with your Routes
        <Switch>
          <Route path={`/movies/:id`}>
            <Movie addToSavedList={addToSavedList} />
          </Route>
          <Route path="/">
            <MovieList movies={movieList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
