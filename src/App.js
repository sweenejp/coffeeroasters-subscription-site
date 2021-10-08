import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, OrderPage } from "./pages";
import { Header, Footer } from "./components";
import { GlobalStyles } from "./components";
import { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";
import { sharedContent } from "./data/sharedContent";
import { homeContent } from "./data/homeContent";
import { aboutContent } from "./data/aboutContent";
import { orderContent } from "./data/orderContent";

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
