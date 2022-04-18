import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserList({ list }) {
  const { pathname } = useLocation();
  return (
    <div>
      {list.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`${pathname}/${item.id}`}>
              <div className="App__users-names">{item.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
