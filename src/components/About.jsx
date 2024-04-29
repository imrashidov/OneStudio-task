import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAboutInfo } from "../control/aboutSlice";
import contact from "/About/contact.png";

const About = () => {
  const dispatch = useDispatch();
  const { aboutInfo } = useSelector((state) => state.about);

  useEffect(() => {
    dispatch(fetchAboutInfo());
  }, [dispatch]);
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-info">
          <img src={contact} alt="WhatsApp" className="contact-icon" />
          <div className="about-left">
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
          <div className="about-right">
            {aboutInfo.map((item) => (
              <div key={item.id} className="about-right-info">
                <img src={item.icon} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
