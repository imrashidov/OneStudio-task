import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarRoutes, fetchNavbarContact } from "../control/navbarSlice";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from "/logo.svg";
import menuMobile from "/menuMobile.svg";
import close from "/close.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  const dispatch = useDispatch();
  const { navbarRoutes, navbarContact } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbarRoutes());
    dispatch(fetchNavbarContact());
  }, [dispatch]);

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
                {navbarRoutes.slice(0, 5).map((route) => (
                  <Link key={route.id}>{route.name}</Link>
                ))}
              </ul>
              <button>Kataloq</button>
            </div>
            <div className="menu-contact">
              {navbarContact.map((contact) => (
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
              {navbarContact[2].icons.map((icon) => (
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
              {navbarRoutes.slice(0, 3).map((route) => (
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
              {navbarRoutes.slice(3, 5).map((route) => (
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
