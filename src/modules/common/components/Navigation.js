import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink className="App__nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="App__nav-link" to="about">
        About
      </NavLink>
      <NavLink className="App__nav-link" to="/users">
        Users
      </NavLink>
    </nav>
  );
}
