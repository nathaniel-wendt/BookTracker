import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';
import { Link } from 'react-router-dom'
import DebounceInput from 'react-debounce-input'

class Search extends Component {
    state = {
        query: '',
        searchedBooks: []
    }

/* Method to update search bar while typing */
    updateSearch = (query) => {
        this.setState({ query });
        this.searchResults(query);
    }

/* Method to search BooksAPI, if no match (or error) return empty array, else display matching results;
   learned by watching Maeva NAP's Study Jam video: www.youtube.com/watch?v=i6L2jLHV9j8 */

    searchResults = (query) => {
        if (query) {
            BooksAPI
            .search(query)
            .then((searchedBooks) => {
                if (searchedBooks.error) {
                    this.setState({ searchedBooks: [] });
                  } else {
                    this.setState({ searchedBooks });
                      }
                   })
            } else {
                this.setState({ searchedBooks: [] });
            }
        }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    
                    >Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput 
                            type="text" 
                            placeholder="Search by title or author"
                            debounceTimeout={150}
                            value={this.state.query}
                            onChange={(event) => this.updateSearch(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-book-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map(searchedBook => {
                                let shelf = 'none'
                        
                                this.props.books.map(book => (
                                    book.id === searchedBook.id ? shelf = book.shelf : ''
                                ))
                                return (
                                    <li key={searchedBook.id}>
                                      <Book
                                      book={searchedBook}
                                      currentShelf={shelf}
                                      changeShelf={this.props.changeShelf}
                                      />
                                  </li>
                              )
                          })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;