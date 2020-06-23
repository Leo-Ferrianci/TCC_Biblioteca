import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home'

import Course from './pages/Course'
import Create from './pages/CreateCourse'
import EditCourse from './pages/EditCourse'

import Project from './pages/Project'
import CreateProject from './pages/CreateProject'
import EditProject from './pages/EditProject'

import Login from './pages/Login'

import Student from './pages/Student'
import Admin from './pages/Admin'
import EditUser from './pages/EditUser'

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
        <Route path="/admin/create">
          <Create />
        </Route>
        <Route path="/admin/editCourse/:id">
          <EditCourse />
        </Route>

        <Route path="/admin/project/:id">
          <Project />
        </Route>
        <Route path="/admin/createProject/:id">
          <CreateProject />
        </Route>
        <Route path="/admin/editProject/:id">
          <EditProject />
        </Route>

        <Route path="/admin/student">
          <Student />
        </Route>

        <Route path="/admin/admin">
          <Admin />
        </Route>

        <Route path="/admin/editUser">
          <EditUser />
        </Route>
      </Switch>
    </Router>
  );
}
