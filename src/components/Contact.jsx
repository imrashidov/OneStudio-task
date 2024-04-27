import contact1 from "../assets/Contact/contact1.svg";
import contact2 from "../assets/Contact/contact2.svg";
import contact3 from "../assets/Contact/contact3.svg";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-main">
          <div className="contact-info">
            <h4>Bizimlə əlaqə</h4>
            <ul className="contact-details">
              <li>
                <span>Telefon:</span>
                <p>+994 12 491 77 77</p>
              </li>
              <li>
                <span>WhatsApp:</span>
                <p>+994 77 350 77 77</p>
              </li>
              <li>
                <span>Ünvan:</span>
                <p>
                  Bakı şəhəri, Səbail rayonu, Neftçi Qurban Abbasov küçəsi 42/44
                </p>
              </li>
              <li>
                <span>Bizi izləyin:</span>
                <div className="contact-socials">
                  <img src={contact1} alt="WhatsApp" />
                  <img src={contact2} alt="Instagram" />
                  <img src={contact3} alt="Facebook" />
                </div>
              </li>
            </ul>
          </div>
          <div className="contact-pin">
            <div className="contact-pin-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
