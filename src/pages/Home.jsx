import Hero from "../components/Hero";
import Apartments from "../components/Apartments";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Apartments />
      <Services />
      <Gallery />
      <Contact />
    </section>
  );
};
export default Home;
