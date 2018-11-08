import React from 'react'
import * as BooksAPI from './BooksAPI'
import Search from './components/Search'
import BookCase from './components/BookCase'
import './App.css' 

class BookTracker extends React.Component {
  state = {
    books: []
  }

componentDidMount() {
  BooksAPI
    .getAll()
    .then((books) => {
      this.setState({ books })
  })
}

  render() {
    return (
      <div className="app">
        <BookCase
          books={this.state.books}
        />    
      </div>
    )
  }
}

export default BookTracker;
