import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import Specialities from './pages/Specialities';
import Speciality from './pages/Speciality';
import Courses from './pages/Courses';
import Course from './pages/Course';
import Teachers from './pages/Teachers';
import Fragment from './pages/Fragment';
import Login from './pages/Login';
import Register from './pages/Register';
import Page404 from './pages/Page404';
import Protected from './routes/Protected';
import Public from './routes/Public';
import Header from './Organisms/Header';


const App = ()=>(
  <Router>
    <Header/>
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/especialidades" exact component={Specialities} />
      <Protected path="/especialidades/:id" component={Speciality} />
      <Protected path="/cursos" exact component={Courses} />
      <Protected path="/cursos/:id"  component={Course} />
      <Protected path="/profesores" exact component={Teachers} />
      <Protected path="/clase/:id"  component={Fragment} />
      
      <Public path="/login"  component={Login} />
      <Public path="/registro"  component={Register} />
      
      <Route component={Page404} />



    </Switch>
  </Router>
)

export default App;
