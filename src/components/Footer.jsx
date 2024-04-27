import footerLogo from "../assets/footerLogo.svg";
import data from "../data/data";
import { Link } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main">
          <img src={footerLogo} alt="" />
          <div className="footer-links">
            <ul>
              {data.navbarRoutes.map((route) => (
                <Link key={route.id} to={route.route}>
                  {route.name}
                </Link>
              ))}
            </ul>
          </div>
          <button onClick={scrollToTop}>
            <FaChevronUp />
          </button>
        </div>
        <div className="footer-copyright">
          <span>© Bayıl Marina</span>
          <p>2023. All rights reserved</p>
          <span>Site by</span>
          <p>One Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
