import Hero from "../components/Hero";
import Apartments from "../components/Apartments";
import Services from "../components/Services";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <section id="home">
      <Hero />
      <Apartments />
      <Services />
      <Gallery />
    </section>
  );
};
export default Home;
