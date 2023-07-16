import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <nav className="App-Routes">
        <ul>
          <li>
            <NavLink to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1>Home</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1>About</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1>Projects</h1>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <h1>Contact</h1>
            </NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}