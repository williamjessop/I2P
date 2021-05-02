import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';
import Prevention from './components/Prevention';
import Resources from './components/Resources';
import Education from './components/Education';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import { useState } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from './components/SignInPage';
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Logout from './components/Logout'

function App() {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false); //DO NOT REMOVE THIS UNUSED STATE VAR, THIS MAKES THE LOGIN PAGE WORK

  const [lessonName, setLessonName] = useState({lessonName: "Lesson1"});
  const [quizName, setQuiz] = useState(null);

  const handleCloseSignUp = () => setShowSignUp(false);
  const handleShowSignUp = () => setShowSignUp(true);
  const handleCloseSignIn = () => setShowSignIn(false);
  const handleShowSignIn = () => setShowSignIn(true);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  return (
    <div className="App">
      <Navigation 
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
          {(sessionStorage.user) ? <Education 
            setLessonName={setLessonName} 
            setQuiz={setQuiz}
            showSignIn={showSignIn} 
            handleClose={handleCloseSignIn} 
          />: <Redirect to="signin"/>}
        </Route>
        <Route path={`/education/${lessonName}`}>
          <Lesson lessonName={lessonName} setLessonName={setLessonName}/>
        </Route>
        <Route path={`/education/${quizName}`}>
          <Quiz />
        </Route>
        <Route exact path='/communication'>
          <Communication />
        </Route>
        <Route exact path='/resources'>
          <Resources />
        </Route>
        <Route exact path='/signin'>
          <SignInPage setLoggedIn={setLoggedIn}/>
        </Route>
      </Switch>
      <Footer/>
      <SignUp show={showSignUp} handleClose={handleCloseSignUp} />
      <SignIn show={showSignIn} handleClose={handleCloseSignIn} showClose={true} setLoggedIn={setLoggedIn}/>
      <Logout show={showLogout} handleClose={handleCloseLogout}/>
    </div>
  );
}

export default App;
