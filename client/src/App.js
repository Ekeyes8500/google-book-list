import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search"
import Nav from "./components/navbar"
import "./App.css";
import Jumbotron from "./components/jumbotron";

function App() {
  return (
    <Router>
      
      <div>
      <Nav/>
        <Jumbotron>
            <h1>(React) Google Book Search</h1>
            <h5>Search for and save books of interest from the Google Books API</h5>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
