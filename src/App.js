import React, { Component } from "react";
import "./App.css";
import Bookshelf from "./Bookshelf";
import Search from "./Search";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="body">
        <header className="list-books-title">
          <h1>my-reads</h1>
        </header>

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
      </div>
    );
  }
}

export default App;
