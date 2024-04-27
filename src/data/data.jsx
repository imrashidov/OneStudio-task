// Hero Logos
import phone from "../assets/Hero/phone.svg";
import location from "../assets/Hero/location.svg";
import social1 from "../assets/Hero/social1.svg";
import social2 from "../assets/Hero/social2.svg";
import social3 from "../assets/Hero/social3.svg";
// ApartmentsInfo
import aptInfo1 from "../assets/ApartmentsInfo/aptInfo1.svg";
import aptInfo2 from "../assets/ApartmentsInfo/aptInfo2.svg";
import aptInfo3 from "../assets/ApartmentsInfo/aptInfo3.svg";
import aptInfo4 from "../assets/ApartmentsInfo/aptInfo4.svg";
import aptInfo5 from "../assets/ApartmentsInfo/aptInfo5.svg";
import aptInfo6 from "../assets/ApartmentsInfo/aptInfo6.svg";
// Apartments
import apt1 from "../assets/Apartments/apt1.png";
import apt2 from "../assets/Apartments/apt2.png";
import apt3 from "../assets/Apartments/apt3.png";
import apt4 from "../assets/Apartments/apt4.png";
import aptIcon1 from "../assets/Apartments/aptIcon1.svg";
import aptIcon2 from "../assets/Apartments/aptIcon2.svg";
import aptIcon3 from "../assets/Apartments/aptIcon3.svg";
// Services
import service1 from "../assets/Services/service1.png";
import service2 from "../assets/Services/service2.png";
import service3 from "../assets/Services/service3.png";
import service4 from "../assets/Services/service4.png";
// Gallery
import gallery1 from "../assets/Gallery/gallery1.png";
import gallery2 from "../assets/Gallery/gallery2.jpeg";
import gallery3 from "../assets/Gallery/gallery3.jpeg";
import gallery4 from "../assets/Gallery/gallery4.jpeg";
import gallery5 from "../assets/Gallery/gallery5.jpeg";

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
  aptInfo: [
    {
      id: 1,
      title: "Şəhərin Mərkəzində",
      icon: aptInfo1,
    },
    {
      id: 2,
      title: "Dənizə mənzərəli",
      icon: aptInfo2,
    },
    {
      id: 3,
      title: "Yüksək Tavan",
      icon: aptInfo3,
    },
    {
      id: 4,
      title: "Yeraltı parklama",
      icon: aptInfo4,
    },
    {
      id: 5,
      title: "7/24 muhafizə xidməti",
      icon: aptInfo5,
    },
    {
      id: 6,
      title: "Geniş uşaq meydançası",
      icon: aptInfo6,
    },
  ],
  aptItemsB: [
    {
      id: 1,
      img: apt1,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 2,
      img: apt2,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "154,44m²",
      sold: true,
    },
    {
      id: 3,
      img: apt3,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "4 otaq",
      areaIcon: aptIcon3,
      area: "173,64m²",
      sold: false,
    },
    {
      id: 4,
      img: apt4,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 5,
      img: apt3,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "4 otaq",
      areaIcon: aptIcon3,
      area: "173,64m²",
      sold: false,
    },
    {
      id: 6,
      img: apt4,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 7,
      img: apt1,
      aptIcon: aptIcon1,
      apartment: "Blok - B",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 8,
      img: apt2,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "154,44m²",
      sold: true,
    },
  ],
  aptItemsA: [
    {
      id: 1,
      img: apt2,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: true,
    },
    {
      id: 2,
      img: apt3,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "154,44m²",
      sold: false,
    },
    {
      id: 3,
      img: apt4,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "4 otaq",
      areaIcon: aptIcon3,
      area: "173,64m²",
      sold: false,
    },
    {
      id: 4,
      img: apt1,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 5,
      img: apt4,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "4 otaq",
      areaIcon: aptIcon3,
      area: "173,64m²",
      sold: false,
    },
    {
      id: 6,
      img: apt1,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: true,
    },
    {
      id: 7,
      img: apt2,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "149,61m²",
      sold: false,
    },
    {
      id: 8,
      img: apt3,
      aptIcon: aptIcon1,
      apartment: "Blok - A",
      roomIcon: aptIcon2,
      room: "3 otaq",
      areaIcon: aptIcon3,
      area: "154,44m²",
      sold: false,
    },
  ],
  modalAptDetails: [
    { id: 1, title: "Salon", value: "38.4m²" },
    { id: 2, title: "Yataq otağı 1", value: "12.4m²" },
    { id: 3, title: "Yataq otağı 2", value: "8.4m²" },
    { id: 4, title: "Yataq otağı 3", value: "14.4m²" },
    { id: 5, title: "Mətbəx", value: "4.4m" },
    { id: 6, title: "Dəhliz", value: "5.4m²" },
    { id: 7, title: "S.Q 1", value: "3.2m²" },
    { id: 8, title: "S.Q 2", value: "4.6m²" },
    { id: 9, title: "Eyvan", value: "3.3m²" },
  ],
  services: [
    {
      id: 1,
      img: service1,
      title: "Uşaq Meydançası və yaşıl həyət",
      description:
        "Hər bir ehtiyac və rahatlığınız üçün uşaq bağçası və uşaq klubu, uşaqlar üçün kafe, həyətdə oturacaqlar, fantan, oyun meydançası, yaşlı adamların istirahəti üçün isə söhbətgahlar mövcuddur.",
    },
    {
      id: 2,
      img: service2,
      title: "Texniki Özəllİklər",
      description:
        "“Bayıl Marina” - da dünyaca məşhur olan “REHAU” pəncərə sistemləri quraşdırılıb, həmçinin yüksək keyfiyyəti ilə seçilən sürətli və səssiz olan “AKONE” liftləri ilə təchiz olunub.Bütün müasir sistemlər beynəlxalq standartlarına uyğundur və təhlükəsizlik tələblərinə cavab verir. “Bayıl Marina”- da rahatlığınız üçün hər bir şərait var. ",
    },
    {
      id: 3,
      img: service3,
      title: "Geniş Yeraltı Parkİng",
      description:
        "Binanın geniş yeraltı parkinqi mövcuddur və ərazinin təhlükəsizliyi fasiləsiz video müşahidə kameraları vasitəsilə təmin edilir. Sakinlər parkinqdən liftlərlə birbaşa mənzillərə qalxa bilərlər.",
    },
    {
      id: 4,
      img: service4,
      title: "Təhlükəsizliyiniz Prinsipimizdir!",
      description:
        "Sakinlərinin təhlükəsizliyini və rahatlığını düşünərək, yüksək keyfiyyətli müşahidə kameraları 7/24 “Bayıl Marina” yaşayış komplesini nəzarət altında saxlayır. Həmçinin mühafizə xidməti də fəaliyyət göstərir, mərkəzi yanğın xəbərdarlığı sistemi var.",
    },
  ],
  galleryItems: [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery3 },
  ],
};

export default data;
