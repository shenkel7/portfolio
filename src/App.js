import {
  Router,
  Switch,
  Route,
  Link
} from "wouter";
import Home from 'src/screens/Home'
import About from 'src/screens/About'
import { routes } from 'src/constants/routes'
import Works from "src/screens/Works"
import Contact from "src/screens/Contact"

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
        <Route path={routes.WORKS}>
          <Works />
        </Route>
        <Route path={routes.CONTACT}>
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
