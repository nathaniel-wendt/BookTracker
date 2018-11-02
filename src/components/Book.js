import React, {Component} from 'react'
import SortButton from './SortButton';

class Book extends Component {
    state = {}

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 188, 
                            backgroundImage: 'url()' 
                        }}></div>
                        <SortButton/>
                    </div>
                    <div className="book-title"></div>
                    <div className="book-authors"></div>
                </div>
            </li>
        )
    }
}

export default Book;