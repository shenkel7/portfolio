import {
  Router,
  Switch,
  Route,
  Link
} from "wouter";
import Home from 'src/screens/Home'
import About from 'src/screens/About'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
