import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book';

class Search extends React.Component {
    state = {
        query: '',
        searchedBooks: []
    }

    updateSearch = (query) => {
        this.setState({
            query: query
        })
        this.matchingBooks(query);
    }

    matchingBooks = (query) => {
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
                    <a
                        className="close-search"
                        onClick={() => this.setState({showSearchPage: false})}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateSearch(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-book-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map(searchedBook => (
                                <li key={searchedBook.id}>
                                    <Book
                                        book={searchedBook}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search;