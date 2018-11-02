import React, {Component} from 'react'
import Shelf from './Shelf';

class BookCase extends Component {
    state = {}

    render() {
        return (
            <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf />
                    </div>
                </div>
                <div className="open-search">

                </div>
            </div>
        </div>
        )
    }
}

export default BookCase;