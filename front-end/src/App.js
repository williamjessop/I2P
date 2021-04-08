import logo from './logo.svg';
import './App.css';
import Home from './components/Home'

import {
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
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
