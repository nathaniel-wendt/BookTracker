import React from 'react'
import * as BooksAPI from './BooksAPI'

import Search from './components/Search'
import BookCase from './components/BookCase'
import './App.css' 

import { Route } from 'react-router-dom'

class BookTracker extends React.Component {
  
/* books array allows all books within BooksAPI to be organized and accessed by components */
  state = {
    books: []
  }

componentDidMount() {
  this.refreshBooks();
}

/* Scans all books within the BooksAPI and sets their state via books array */
refreshBooks() {
  BooksAPI
    .getAll()
    .then((books) => {
      this.setState({ books })
    })
}

/* Allows books to be moved between shelves, updating books array upon change */
changeShelf = (book, shelf) => {
  BooksAPI
    .update(book, shelf);
  this.refreshBooks();
  
}
/* Route "/" sets BookCase as homepage, "/search" renders the search page;
   both pass on the books array and changeShelf props to child components */

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
