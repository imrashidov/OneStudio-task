import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNavbarRoutes, fetchNavbarContact } from "../control/navbarSlice";
import { NavHashLink } from "react-router-hash-link";
import { FaChevronUp } from "react-icons/fa6";
import footerLogo from "../../public/footerLogo.svg";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const dispatch = useDispatch();
  const { navbarRoutes } = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbarRoutes());
    dispatch(fetchNavbarContact());
  }, [dispatch]);
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main">
          <img src={footerLogo} alt="" />
          <div className="footer-links">
            <ul>
              {navbarRoutes.map((route) => (
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
          <button onClick={scrollToTop}>
            <FaChevronUp />
          </button>
        </div>
        <div className="footer-copyright">
          <div className="footer-copyright-left">
            <span>© Bayıl Marina</span>
            <p>2023. All rights reserved</p>
          </div>
          <div className="footer-copyright-right">
            <span>Site by</span>
            <p>One Studio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
