import PropTypes from "prop-types";
import modalClose from "../../assets/Modals/modalClose.svg";
import modalSocial from "../../assets/Modals/modalSocial.svg";
import modalPhone from "../../assets/Modals/modalPhone.svg";
import data from "../../data/data";

const ApartmentModal = ({ item, onClose }) => {
  return (
    <div className="apt-modal">
      <div className="apt-modal-container">
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
      </div>
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
