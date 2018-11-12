import React, { Component } from 'react'
import Book from './Book'

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