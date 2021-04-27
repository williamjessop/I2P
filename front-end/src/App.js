import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';
import Prevention from './components/Prevention';
import Resources from './components/Communication';
import Education from './components/Education';
import Footer from './components/Footer';
import Lesson from './components/Lesson';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import SignInPage from './components/SignInPage';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Logout from './components/Logout'

//{!user ? <Redirect to="/" /> : }

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [user, setUser] = useState(null);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <div className="App">
      <Navigation 
        user={user} 
        setUser={setUser} 
        handleShowLogout={handleShowLogout}
        handleShowSignIn={handleShowSignIn}
        handleShowSignUp={handleShowSignUp}
      />
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
          <Education user={user} showSignIn={showSignIn} handleClose={handleCloseSignIn} setUser={setUser}/>
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
<<<<<<< HEAD
      <Footer/>
=======
      <SignUp show={showSignUp} handleClose={handleCloseSignUp} />
      <SignIn show={showSignIn} handleClose={handleCloseSignIn} setUser={setUser} />
      <Logout show={showLogout} handleClose={handleCloseLogout} setUser={setUser} />
>>>>>>> 78ae3731c812a4b1882541118d0a274d093da5dd
    </div>
  );
}

export default App;
