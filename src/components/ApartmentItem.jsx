import { PropTypes } from "prop-types";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAptItemsB, fetchAptItemsA } from "../control/aptSlice";

const ApartmentItem = ({ handleItemClick, active }) => {
  const dispatch = useDispatch();
  const { aptItemsB, aptItemsA } = useSelector((state) => state.apt);

  useEffect(() => {
    dispatch(fetchAptItemsB());
    dispatch(fetchAptItemsA());
  }, [dispatch]);

  return (
    <div className="apt-items">
      {(active === "b" ? aptItemsB.slice(0, 4) : aptItemsA.slice(0.4)).map(
        (item) => (
          <div
            className="apt-item"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            {item.sold === true && (
              <span>
                <p>Satılıb</p>
              </span>
            )}
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
        )
      )}
      {(active === "b" ? aptItemsB.slice(4, 8) : aptItemsA.slice(4, 8)).map(
        (item) => (
          <div
            className="apt-item-2"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            {item.sold === true && (
              <span>
                <p>Satılıb</p>
              </span>
            )}
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
        )
      )}
    </div>
  );
};

export default ApartmentItem;

ApartmentItem.propTypes = {
  handleItemClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};
