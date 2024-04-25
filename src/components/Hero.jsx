import data from "../data/data";

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-overlay"></div>
        <div className="hero-main">
          <div className="hero-contact">
            {data.heroContact.map((contact) => (
              <div key={contact.id} className="contact-items">
                {contact.icon && <img src={contact.icon} alt="icon" />}
                <p>{contact.text}</p>
                {contact.title && <p>{contact.title}</p>}
                {contact.icons &&
                  contact.icons.map((icon) => (
                    <img key={icon.id} src={icon.icon} alt="icon" />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
