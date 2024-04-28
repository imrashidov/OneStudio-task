import PropTypes from "prop-types";
import modalClose from "../../assets/Modals/modalClose.svg";
import modalSocial from "../../assets/Modals/modalSocial.svg";
import modalPhone from "../../assets/Modals/modalPhone.svg";
import data from "../../data/data";
import { motion } from "framer-motion";

const ApartmentModal = ({ item, onClose }) => {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.4 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="apt-modal">
      <div className="apt-modal-overlay" onClick={onClose}></div>
      <motion.div
        className="apt-modal-container"
        initial="hidden"
        animate="visible"
        variants={modalVariants}
      >
        <div className="apt-modal-main">
          <div className="apt-modal-left">
            <img src={item.img} alt="Apartment" className="apt-modal-img" />
            <div className="apt-modal-left-buttons">
              <div className="apt-modal-contact">
                <img src={modalSocial} alt="" />
                <p>+994 77 350 00 05</p>
              </div>
              <div className="apt-modal-contact">
                <img src={modalPhone} alt="" />
                <p>+994 12 491 77 77</p>
              </div>
            </div>
          </div>
          <div className="apt-modal-right">
            <h3 className="">
              {item.room}-{item.area}
            </h3>
            {data.modalAptDetails.map((item) => (
              <ul className="apt-modal-details" key={item.id}>
                <li>{item.title}</li>
                <li>{item.value}</li>
              </ul>
            ))}
          </div>
        </div>
        <button onClick={onClose}>
          <img src={modalClose} alt="Close" />
        </button>
      </motion.div>
    </div>
  );
};

ApartmentModal.propTypes = {
  item: PropTypes.shape({
    apartment: PropTypes.string,
    img: PropTypes.string,
    room: PropTypes.string,
    area: PropTypes.string,
    id: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.string,
  }),
  onClose: PropTypes.func,
};

export default ApartmentModal;
