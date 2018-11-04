import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import BookCase from './components/BookCase'
import './App.css' 

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <BookCase/>    
      </div>
    )
  }
}

export default BooksApp;
