import Container from "./components/Container";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesList from "./components/ServicesList";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero/>
        <ServicesList/>
      </Container>
    </>
  );
}

export default App;
