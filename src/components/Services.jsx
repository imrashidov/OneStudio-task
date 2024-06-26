import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices } from "../control/servicesSlice";

const Services = () => {
  const dispatch = useDispatch();
  const { services } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  return (
    <section id="services">
      <div className="services-container">
        <div className="services-main">
          <div className="main-title">
            <h1>XİDMƏTLƏR</h1>
          </div>
          <div className="services-items">
            {services.map((service) => {
              const isEven = service.id % 2 === 0;
              return (
                <div
                  key={service.id}
                  className={`service-item ${isEven && "service-even"}`}
                >
                  <div className="service-img">
                    <img src={service.img} alt="service-icon" />
                  </div>
                  <div className="service-description">
                    <h2 className="service-title">{service.title}</h2>
                    <p className="service-text">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
