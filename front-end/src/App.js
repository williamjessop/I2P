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
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Navigation user={user} setUser={setUser} />
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
          {!user ? <Redirect to="/" /> : <Education user={user}/>}
        </Route>
        <Route exact path='/communication'>
          <Communication />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
        <Route exact path='/signin'>
          <SignInPage setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
