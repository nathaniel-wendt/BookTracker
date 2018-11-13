import React, { Component } from 'react'
import Book from './Book'

/* Filters books in books array, organizing them into shelves according to shelfName;
   passing on the books, shelfName and changeShelf method to Book.js */

class Shelf extends Component {
    render() {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.innerText}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                            this.props.books
                                .filter(book => book.shelf === this.props.shelfName)
                                .map(book => (
                                    <li key={book.id}>
                                        <Book
                                            book={book}
                                            currentShelf={this.props.shelfName}
                                            changeShelf={this.props.changeShelf}
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

export default Shelf;