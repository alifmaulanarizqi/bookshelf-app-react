import React from 'react';
import MoveButton from './MoveButton';
import DeleteButton from './DeleteButton';

function BookshelfItem({title, author, year, id, moveBook, deleteBook}) {
    return (
        <article className='book_item'>
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{year}</p>
            <div className='action'><MoveButton moveBook={moveBook} id={id}/> <DeleteButton deleteBook={deleteBook} id={id}/></div>
        </article>
    );
}

export default BookshelfItem;