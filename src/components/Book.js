import React, {Component} from 'react'
import SortButton from './SortButton';

class Book extends Component {
    state = {}

    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                    className="book-cover" 
                    style={{ 
                        width: 128, 
                        height: 188, 
                        backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` 
                    }}></div>
                    <SortButton/>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>

        )
    }
}

export default Book;