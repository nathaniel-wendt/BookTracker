import React, { Component } from 'react'
import Shelf from './Shelf'

import { Link } from 'react-router-dom'

class BookCase extends Component {
    render() {
        return(
            <div className="list-books">
                <div className="list-books-title">
                    <h1>BookTracker</h1>
                </div>
                    <div className="list-books-content">
                        <div>
                            <Shelf
                                shelfName='currentlyReading'
                                innerText='Currently Reading'
                                books={this.props.books}
                                changeShelf={this.props.changeShelf}
                            />
                            <Shelf
                                shelfName='wantToRead'
                                innerText='Want to Read'
                                books={this.props.books}
                                changeShelf={this.props.changeShelf}
                            />
                            <Shelf
                                shelfName='read'
                                innerText='Read'
                                books={this.props.books}
                                changeShelf={this.props.changeShelf}
                            />
                        </div>             
                    </div>
                <div className="open-search">
                    <Link 
                        to="/Search"
                    >Add a Book</Link>
                </div>
            </div>
        )
    }
}

export default BookCase;