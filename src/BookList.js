import React from 'react';
import Book from './Book';

function BookList(props) {
    return (
        <div>
            <Book books={props.books}/>
        </div>
    )
}

export default BookList;