import React from "react";
import { NavLink, Link, useRouteMatch, useHistory } from "react-router-dom";

export default function SavedList(props) {
  const { list } = props;
  const { url } = useRouteMatch();

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map((movie) => (
        <NavLink to={`${url}movies/${movie.id}`} key={movie.id}>
          <span className="saved-movie">{movie.title}</span>
        </NavLink>
      ))}

      <div className="home-button" onClick={goHome}>
        Home
      </div>
    </div>
  );
}
