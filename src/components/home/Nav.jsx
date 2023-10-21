import { NavLink } from "react-router-dom";

const Nav = () => {
  const liStyle = {
    display: "inline-block",
  };

  return (
    <nav>
      <ul>
        <li style={liStyle}>
          <NavLink
            className={({ isActive }) => {
              return (
                "button-navigation button-text " +
                (isActive ? "anchor-active" : "")
              );
            }}
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li className="button-navigation button-text">About</li>
        <li className="button-navigation button-text">Menu</li>
        <li style={liStyle}>
          <NavLink
            className={({ isActive }) => {
              return (
                "button-navigation button-text " +
                (isActive ? "anchor-active" : "")
              );
            }}
            to={"/book-a-table"}
          >
            Reservations
          </NavLink>
        </li>
        <li className="button-navigation button-text">Order Online</li>
        <li className="button-navigation button-text">Login</li>
      </ul>
    </nav>
  );
};

export default Nav;
