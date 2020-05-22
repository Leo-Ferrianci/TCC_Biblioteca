import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'
import Course from './pages/Course'
import Create from './pages/CreateCourse'
import Project from './pages/Project'
import CreateProject from './pages/CreateProject'
import Login from './pages/Login'
import Student from './pages/Student'

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/admin/course">
          <Course />
        </Route>
        <Route exact path="/admin/create">
          <Create />
        </Route>

        <Route exact path="/admin/project/:id">
          <Project />
        </Route>
        <Route exact path="/admin/createProject/:id">
          <CreateProject />
        </Route>


        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/admin/student">
          <Student />
        </Route>
      </Switch>
    </Router>
  );
}
