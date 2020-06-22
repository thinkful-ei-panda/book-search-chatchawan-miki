import React from 'react';

function Book(props) {
    return (
        <div>
            <h2>Title: {props.books.items[0].volumeInfo.title}</h2>
            <p>Author/s: {props.books.items[0].volumeInfo.author}</p>
            <p>Description: {props.books.items[0].volumeInfo.description}</p>
            <p>Image: <img src={props.books.items[0].volumeInfo.imageLinks.thumbnail} alt={props.books.items.title}/></p>
        </div>
    )
}

export default Book;