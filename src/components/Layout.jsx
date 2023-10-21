import { Outlet } from "react-router-dom";
import logo from "../assets/little-lemon-logo.png";
import Nav from "./home/Nav";
const Layout = () => {
  return (
    <div>
      <header id="header">
        <img src={logo} alt="logo" />
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
