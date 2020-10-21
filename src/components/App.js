import React from 'react';
import '../App.css';
import {Navbar} from "./Navbar/Navbar";
import Contacts from "./pages/Contacts/Contacts";
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {NotFound} from "./pages/NotFound/NotFound";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/aboutme" component={AboutMe}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
