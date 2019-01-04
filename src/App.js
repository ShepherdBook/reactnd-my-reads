import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import { Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="body">
        

        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books-content">
              <Bookshelf className="bookshelf" />
            </div>
          )}
        />

        <Route exact path="/search" component={Search} />

        <Link to="/search" className="open-search">
          <button>Open Search</button>
        </Link>
      </div>
    );
  }
}

export default App;
