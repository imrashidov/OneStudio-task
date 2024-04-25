import { Link } from "react-router-dom";
import data from "../data/data";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-left">
            <ul>
              {data.navbarRoutes.slice(0, 3).map((route) => (
                <Link key={route.id}>{route.name}</Link>
              ))}
            </ul>
          </div>
          <img src={logo} alt="Brand Logo" />
          <div className="navbar-right">
            <ul>
              {data.navbarRoutes.slice(3, 5).map((route) => (
                <Link key={route.id}>{route.name}</Link>
              ))}
            </ul>
            <div className="navbar-help">
              <button>Kataloq</button>
              <select name="lang" id="lang">
                <option value="az">AZ</option>
                <option value="en">EN</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
