import React, { Component } from 'react'

class BookList extends Component {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>The Way Of Kings</li>
                    <li>The Name Of The Wind</li>
                    <li>The Final Empire</li>
                </ul>
            </div>
        );
    }
}

export default BookList;