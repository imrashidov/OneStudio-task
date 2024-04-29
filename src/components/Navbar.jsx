import { useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import data from "../data/data";
import logo from "../assets/logo.svg";
import menuMobile from "../assets/menuMobile.svg";
import close from "../assets/close.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <nav>
      {activeMenu && (
        <div className="navbar-menu">
          <div className={`menu-main ${activeMenu && "active"}`}>
            <button className="menu-close" onClick={handleMenu}>
              <img src={close} alt="Close" />
            </button>
            <div className="menu-link">
              <ul>
                {data.navbarRoutes.slice(0, 5).map((route) => (
                  <Link key={route.id}>{route.name}</Link>
                ))}
              </ul>
              <button>Kataloq</button>
            </div>
            <div className="menu-contact">
              {data.navbarContact.map((contact) => (
                <div key={contact.id} className="aa flex items-center gap-3 ">
                  {contact.icon && (
                    <img
                      src={contact.icon}
                      alt="icon"
                      className="w-[23px] h-[23px] fill-black stroke-bg-black"
                    />
                  )}
                  <p className="!text-bluePrimary w-[200px]">{contact.text}</p>
                </div>
              ))}
            </div>
            <div className="menu-social">
              {data.navbarContact[2].icons.map((icon) => (
                <img key={icon.id} src={icon.icon} alt="icon" />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="navbar-container">
        <div className="navbar-main">
          <div className="navbar-left">
            <button className="navbar-menu-button" onClick={handleMenu}>
              <img src={menuMobile} alt="Menu" />
            </button>
            <ul>
              {data.navbarRoutes.slice(0, 3).map((route) => (
                <NavHashLink
                  key={route.id}
                  to={route.route}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  {route.name}
                </NavHashLink>
              ))}
            </ul>
          </div>
          <img src={logo} alt="Brand Logo" />
          <div className="navbar-right">
            <ul>
              {data.navbarRoutes.slice(3, 5).map((route) => (
                <NavHashLink
                  key={route.id}
                  to={route.route}
                  scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                >
                  {route.name}
                </NavHashLink>
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
