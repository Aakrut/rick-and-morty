import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/nav";
import GlobalStyle from './GlobalStyle'
import Characters from './components/pages/Characters'
import Episodes from './components/pages/Episodes'
import Locations from './components/pages/Location'
import Home from './components/pages/Home';
import CharacterDetail from "./components/pages/CharacterDetail";
import EpisodeDetail from './components/pages/EpisodeDetail'
import LocationDetail from "./components/pages/LocationDetail";
import Sidebar from "./components/sidebar";
import { useState } from "react";


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
      <GlobalStyle />
      <Router>
        
        <NavBar toggle={toggle} />
        <Sidebar isOpen={ isOpen} toggle={toggle} />
        <Switch>
          
        <Route path='/' exact>
            <Home />
        </Route>

          <Route path='/characters' exact>
              <Characters />
          </Route>

          <Route path='/locations' exact>
              <Locations />
          </Route>

          <Route path='/episodes' exact>
              <Episodes />
          </Route>

          <Route path='/characters/:id' exact>
            <CharacterDetail />
          </Route>

          <Route path='/episode/:id' exact>
            <EpisodeDetail />
          </Route>

          <Route path='/location/:id' exact>
            <LocationDetail />
          </Route>
        </Switch>
        </Router>  
    </>
  );
}

export default App;
