import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Communication from './components/Communication';
import Prevention from './components/Prevention';
import Resources from './components/Communication';
import Education from './components/Education';
import Lesson from './components/Lesson';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import SignInPage from './components/SignInPage';

//{!user ? <Redirect to="/" /> : }


function App() {
  const [user, setUser] = useState(null);
  const [lessonName, setLessonName] = useState({lessonName: "Lesson1"});
  const [lessonDesc, setLessonDesc] = useState({lessonDesc: "Lesson Description"});
  const [quizName, setQuiz] = useState(null);
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
          <Education user={user} setLessonName={setLessonName} setQuiz={setQuiz} setLessonDesc={setLessonDesc} lessonName={lessonName} lessonDesc={lessonDesc}/>
        </Route>
        <Route path={`/education/${lessonName}`}>
          <Lesson />
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
          <SignInPage setUser={setUser}/>
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
