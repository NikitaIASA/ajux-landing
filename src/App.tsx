import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import ServicesList from "./components/ServicesList";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesList />
      <AboutUs />
      <Team />
      <Portfolio />
      <Testimonials />
    </>
  );
}

export default App;
