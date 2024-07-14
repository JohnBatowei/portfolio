import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/screen/LandingPage";
import ForOFor from "./components/screen/ForOFor";
import Contact from "./components/screen/Contact";

function App() {
  return (
    <>
      {
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={ForOFor} />
          </Switch>
        </Router>
      }
    </>
  );
}

export default App;
