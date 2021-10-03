import { Container } from "../components/styles";
import contentHome from "../data/contentHome";
import { Banner, Products, About1, About2 } from "../components";

function HomePage() {
  const { callToAction, products, aboutSection1, aboutSection2 } = contentHome;

  return (
    <Container>
      <Banner content={callToAction} />
      <Products content={products} />
      <About1 content={aboutSection1} />
      <About2 content={aboutSection2} />
    </Container>
  );
}

export default HomePage;
