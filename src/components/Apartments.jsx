import { useState } from "react";
import data from "../data/data";
import ApartmentItem from "./ApartmentItem";
import ApartmentModal from "./Modals/ApartmentModal";

const Apartments = () => {
  const [active, setActive] = useState("b");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleActive = (id) => {
    setActive(id);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="apartments">
      <div className="apt-container">
        <div className="apt-main">
          <div className="main-title">
            <h1>MƏNZİLLƏR</h1>
            <div className="apt-choose">
              <button
                id="b"
                onClick={(e) => handleActive(e.target.id)}
                className={active === "b" ? "active" : ""}
              >
                B - blok
              </button>
              <button
                id="a"
                onClick={(e) => handleActive(e.target.id)}
                className={active === "a" ? "active" : ""}
              >
                A - blok
              </button>
            </div>
          </div>
          {selectedItem && (
            <ApartmentModal item={selectedItem} onClose={handleCloseModal} />
          )}
          <ApartmentItem handleItemClick={handleItemClick} active={active} />
        </div>
      </div>
    </section>
  );
};

export default Apartments;
