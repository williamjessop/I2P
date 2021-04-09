import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

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
        <Route exact path='/about'>
          <p>about</p>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
