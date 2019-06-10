import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  Navbar  from "./components/layout/navbar";
import  Dashboard  from "./components/dashboard/dashboard";
import {ProjectDetails} from "./components/projects/projectDetails";
import SignIn from "./components/auth/signin";
import {SignUp} from "./components/auth/signUp";
import CreateProject from "./components/projects/createProject";



function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/projectdetails/:id" component={ProjectDetails}/>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/createproject" component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
