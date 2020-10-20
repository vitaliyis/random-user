import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import {Navbar} from "./Navbar";
import Contacts from "./pages/contacts/Contacts";
import {Route, Switch} from "react-router-dom";
import {Home} from "./pages/Home";
import {NotFound} from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contacts" component={Contacts}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
