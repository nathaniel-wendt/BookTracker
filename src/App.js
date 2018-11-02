import React from 'react'
import * as BooksAPI from './BooksAPI'

import './App.css'
import BookCase from './components/BookCase';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <BookCase />
    )
  }
}

export default BooksApp
