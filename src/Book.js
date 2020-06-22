import React from 'react';

function Book(props) {
    return (
        <div>
            <h2>Title: {props.book.volumeInfo.title}</h2>
            <p>Author/s: {props.book.volumeInfo.authors.join(", ")}</p>
            <p>Description: {props.book.volumeInfo.description}</p>
            <p>Image: <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/></p>
        </div>
    )
}

export default Book;