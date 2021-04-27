import {
  Router,
  Switch,
  Route,
  Link
} from "wouter";
import Home from 'src/screens/Home'
import About from 'src/screens/About'
import { routes } from 'src/constants/routes'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HOME}>
          <Home />
        </Route>
        <Route path={routes.ABOUT}>
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
