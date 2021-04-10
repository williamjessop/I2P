import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs'
import Communication from './components/Communication'
import Prevention from './components/Prevention'
import Resources from './components/Communication'

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/aboutus'>
          <AboutUs/>
        </Route>
        <Route exact path='/communication'>
          <Communication/>
        </Route>
        <Route exact path='/prevention'>
          <Prevention/>
        </Route>
        <Route exact path='/resources'>
          <Resources/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
