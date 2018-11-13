import React, { Component } from 'react'

/* Formats each book within the books array passed down from App.js 
   logical operators added to backgroundImage to prevent error when books were missing thumbnail image;
   conditional operator used to improve readability of books with multiple authors and display 'Unknown' for books missing an author */

class Book extends Component {
    render() {
        let thumbnail = this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : ''
        let authors = this.props.book.authors ? this.props.book.authors && this.props.book.authors.join(', ') : 'Unknown'
        let title = this.props.book.title
        
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 188,
                            backgroundImage: `url("${thumbnail}")`
                        }}>
                    </div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => this.props.changeShelf(
                            this.props.book, event.target.value
                        )}
                        value={this.props.currentShelf}
                    >
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
                </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

export default Book;