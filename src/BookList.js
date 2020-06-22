import React from 'react';
import Book from './Book';

function BookList(props) {
    const books = props.books.map(book => {
        return <Book key={book.id} book={book} />
    })

    return (
        <div>
            {books}
        </div>
    )
}

export default BookList;