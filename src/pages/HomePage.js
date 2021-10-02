import { Container } from "../components/styles";
import contentHome from "../data/contentHome";
import { theme } from "../data/theme";
import { Banner, Products } from "../components";

function HomePage() {
  const { callToAction, products } = contentHome;

  return (
    <Container>
      <Banner {...theme} content={callToAction} />
      <Products {...theme} content={products} />
    </Container>
  );
}

export default HomePage;
