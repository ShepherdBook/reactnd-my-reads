import React, { Component } from 'react';
import './App.css';
import Bookshelf from './Bookshelf';

class App extends Component {

  render() {
    return (
      <div className="body">
        <header className="list-books-title">
          <h1>my-reads</h1>
        </header>
        <div className='list-books-content'>
          <Bookshelf className='bookshelf' />
        </div>
      </div>
    );
  }
}

export default App;
