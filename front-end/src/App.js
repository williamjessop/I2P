import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';
import Prevention from './components/Prevention';
import Resources from './components/Communication';
import Education from './components/Education';
import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from './components/SignInPage';

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
          {!token ? <Redirect to="/" /> : <Education token={token}/>}
        </Route>
        <Route exact path='/communication'>
          <Communication />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
        <Route exact path='/signin'>
          <SignInPage setToken={setToken}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
