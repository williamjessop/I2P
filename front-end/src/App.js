import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Communication from "./components/Communication";
import Prevention from "./components/Prevention";
import Education from "./components/Education";
import Lesson from "./components/Lesson";
import Quiz from "./components/Quiz";
import Footer from "./components/Footer";
import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Logout from "./components/Logout";
import Certificate from "./components/Certificate";

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const [lessonName, setLessonName] = useState({ lessonName: "Lesson1" });
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
        <Route exact path="/">
          <Home />
          <Footer />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="/prevention">
          <Prevention />
          <Footer />
        </Route>
        <Route exact path="/education">
          {sessionStorage.user ? (
            <Education
              setLessonName={setLessonName}
              setQuiz={setQuiz}
              showSignIn={showSignIn}
              handleClose={handleCloseSignIn}
            />
          ) : (
            <Redirect to="signin" />
          )}
          <Footer />
        </Route>
        <Route path={`/education/${lessonName}`}>
          <Lesson lessonName={lessonName} />
          <Footer />
        </Route>
        <Route path={`/education/${quizName}`}>
          <Quiz />
          <Footer />
        </Route>
        <Route exact path="/communication">
          <Communication />
          <Footer />
        </Route>
        <Route exact path="/signin">
          <SignInPage />
          <Footer />
        </Route>
        <Route exact path={`/certificate`}>
          <Certificate />
        </Route>
      </Switch>
      <SignUp show={showSignUp} handleClose={handleCloseSignUp} />
      <SignIn
        show={showSignIn}
        handleClose={handleCloseSignIn}
        showClose={true}
      />
      <Logout show={showLogout} handleClose={handleCloseLogout} />
    </div>
  );
}

export default App;
