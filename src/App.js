import {
  Router,
  Switch,
  Route,
} from "wouter";
import Home from 'src/screens/Home'
import About from 'src/screens/About'
import { routes } from 'src/constants/routes'
import Works from "src/screens/Works"
import Contact from "src/screens/Contact"
import WorkPage from 'src/screens/WorkPage'
import Secret1 from 'src/screens/secrets/Secret1'
import Secret2 from 'src/screens/secrets/Secret2'


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
        <Route path={`${routes.WORKS}/:index`}>
            {params => {
            return (
                <WorkPage index={params.index}/>
            );
          }}
        </Route>
        <Route path={routes.CONTACT}>
          <Contact />
        </Route>
        <Route path={routes.SECRET1}>
          <Secret1 />
        </Route>
        <Route path={routes.SECRET2}>
          <Secret2 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
