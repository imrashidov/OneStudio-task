import { Helmet } from "react-helmet";
import Hero from "../components/Hero";
import Apartments from "../components/Apartments";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import About from "../components/About";

const Home = () => {
  return (
    <section id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bayıl Marina - Ana Səhifə</title>
      </Helmet>
      <Hero />
      <About />
      <Apartments />
      <Services />
      <Gallery />
      <Contact />
    </section>
  );
};
export default Home;
