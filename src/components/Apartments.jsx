import { useState } from "react";
import contact from "../assets/ApartmentsInfo/contact.png";
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
        <img src={contact} alt="WhatsApp" className="contact-icon" />
        <div className="apt-info">
          <div className="apt-left">
            <h1>Bayıl marina residence</h1>
            <p>
              Bayıl Marina Residence 2 girişli yaşayış binası olmaqla, hündür
              tavanı, qonaqlar üçün geniş foyesi, keyfiyyətli pəncərələri olan
              1,2,3 və 4 otaqlı mənzillərdən ibarətdir. Bina yüksək keyfiyyətli
              generator sistemi, sürətli internet, rəqəmsal telefon rabitəsi,
              nasosxana ilə təchiz olunub. Ticarət infrastrukturu ilə seçilən
              möhtəşəm memarlıq layihəsi və müasir kompleks seysmik
              davamlılığına görə seçilir. 24 saat qorunan ərazidə seyf qapılar,
              sürətli və səssiz liftlər, yanğın əleyhinə sistem təhlükəsizlik
              standartlarına cavab verir. Hər bir ehtiyac və rahatlığınız üçün
              üçün yeraltı parkinq, uşaq bağçası və uşaq klubu, uşaqlar üçün
              kafe, həyətdə oturacaqlar, fantan, oyun meydançası, yaşlı adamlar
              üçün sakit məkan, hipermarket, camaşırxana, fitnes, spa və estetik
              mərkəzlər, restoran və kafelər təsis olunub.
            </p>
          </div>
          <div className="apt-right">
            {data.aptInfo.map((item) => (
              <div key={item.id} className="apt-right-info">
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="apt-main">
          <div className="apt-main-title">
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
