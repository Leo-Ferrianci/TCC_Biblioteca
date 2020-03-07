import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Course from './pages/Course'
import Create from './pages/CreateCourse'
import Login from './pages/Login'
import Student from './pages/Student'

export default function BasicExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/course">
          <Course />
        </Route>
        <Route path="/admin/create">
          <Create />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/admin/student">
          <Student />
        </Route>
      </Switch>
    </Router>
  );
}

