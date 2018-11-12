import React from 'react'
import * as BooksAPI from './BooksAPI'

import Search from './components/Search'
import BookCase from './components/BookCase'
import './App.css' 

import { Route } from 'react-router-dom'


class BookTracker extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  this.refreshBooks();
}

refreshBooks() {
  BooksAPI
    .getAll()
    .then((books) => {
      this.setState({ books })
    })
}

changeShelf = (book, shelf) => {
  BooksAPI
    .update(book, shelf);
  this.refreshBooks();
  
}


  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookCase
            books={this.state.books}
            changeShelf={this.changeShelf}
        />  
        )} />

        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
   
      </div>
    )
  }
}

export default BookTracker;
