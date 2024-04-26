import { PropTypes } from "prop-types";
import data from "../data/data";

const ApartmentItem = ({ handleItemClick, active }) => {
  return (
    <div className="apt-items">
      {(active === "b" ? data.aptItemsB : data.aptItemsA).map((item) => (
        <div
          className="apt-item"
          key={item.id}
          onClick={() => handleItemClick(item)}
        >
          {item.sold === true && <span>Satılıb</span>}
          <div className="apt-image">
            <img src={item.img} alt="Apartment" />
            <h5>
              {item.room} - {item.area}
            </h5>
          </div>
          <div className="apt-details">
            <div className="apt-detail">
              <img src={item.aptIcon} alt="Apartment" />
              <p>{item.apartment}</p>
            </div>
            <div className="apt-detail">
              <img src={item.roomIcon} alt="Apartment" />
              <p>{item.room}</p>
            </div>
            <div className="apt-detail">
              <img src={item.areaIcon} alt="Apartment" />
              <p>{item.area}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApartmentItem;

ApartmentItem.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
