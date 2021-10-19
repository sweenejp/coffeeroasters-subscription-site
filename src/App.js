import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, OrderPage } from "./pages";
import { Header, Footer } from "./components";
import { GlobalStyles } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { sharedContent } from "./content/shared";
import { homeContent } from "./content/home";
import { aboutContent } from "./content/about";
import { orderContent } from "./content/order";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header content={sharedContent} />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <HomePage content={homeContent} />}
          />
          <Route
            path="/about"
            exact
            component={() => <AboutPage content={aboutContent} />}
          />
          <Route
            path="/plan"
            exact
            component={() => <OrderPage content={orderContent} />}
          />
        </Switch>
        <Footer content={sharedContent} />
      </ThemeProvider>
    </Router>
  );
}

export default App;
