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
import CanvasClass from 'src/components/CanvasClass'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={routes.HOME}>
          <CanvasClass />
          <Home />
        </Route>
        <Route path={routes.ABOUT}>
          <About />
        </Route>
        <Route path={`${routes.WORKS}`}>
          <Works />
        </Route>
        <Route path={`${routes.WORKS}/:type/:index`}>
            {params => {
            return (
                <WorkPage index={params.index} type={params.type}/>
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
