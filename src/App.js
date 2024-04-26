import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './components/screen/LandingPage'

function App() {
  return (
    <>
{
     <Router>
     <Switch>
     <Route exact path='/' component={LandingPage}/>
     {/* <Route path='*' component={ForOFor}/> */}
     </Switch>
     </Router>
}
    </>
  );

  
}

export default App;
