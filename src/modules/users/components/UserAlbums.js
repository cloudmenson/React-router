import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserAlbums({ albums }) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="App__user-albums">
      {albums.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`${pathname}/${item.id}`}>
              <div className="App__users-albums-names">{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
