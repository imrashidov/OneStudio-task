import phone from "../assets/Hero/phone.svg";
import location from "../assets/Hero/location.svg";
import social1 from "../assets/Hero/social1.svg";
import social2 from "../assets/Hero/social2.svg";
import social3 from "../assets/Hero/social3.svg";

const data = {
  navbarRoutes: [
    {
      id: 1,
      name: "Haqqımızda",
      route: "/",
    },
    {
      id: 2,
      name: "Mənzillər",
      route: "/",
    },
    {
      id: 3,
      name: "İnfrastruktor",
      route: "/",
    },
    {
      id: 4,
      name: "Qalereya",
      route: "/",
    },
    {
      id: 5,
      name: "Əlaqə",
      route: "/",
    },
  ],
  heroContact: [
    { id: 1, icon: phone, text: "(+994 77) 350-00-05" },
    { id: 2, icon: location, text: "Bayıl Neftçi Qurban Abbasov küçəsi 42/44" },
    {
      id: 3,
      title: "Sosial:",
      icons: [
        { id: 1, icon: social1 },
        { id: 2, icon: social2 },
        { id: 3, icon: social3 },
      ],
    },
  ],
};

export default data;
