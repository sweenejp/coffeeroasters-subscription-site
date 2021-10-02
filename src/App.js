import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, AboutPage, PlanPage } from "./pages";
import { Header } from "./components";
import { GlobalStyles } from "./components/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./data/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <AboutPage />} />
          <Route path="/plan" exact component={() => <PlanPage />} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
