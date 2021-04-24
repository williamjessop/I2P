import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';
import Prevention from './components/Prevention';
import Resources from './components/Communication';
import Education from './components/Education';
import { useState } from 'react';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div className="App">
      <Navigation token={token} setToken={setToken} />
      <div id="standard-nav-spacing"></div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/about-us'>
          <AboutUs />
        </Route>
        <Route exact path='/prevention'>
          <Prevention />
        </Route>
        <Route exact path='/education'>
          <Education />
        </Route>
        <Route exact path='/communication'>
          <Communication />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
