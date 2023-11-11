import React from 'react';
import { Link } from 'react-router-dom';
import MoveButton from './MoveButton';
import DeleteButton from './DeleteButton';

function BookshelfItem({title, author, year, description,  id, moveBook, deleteBook}) {

    return (
        <article className='book_item'>
            <div>
                <Link to={`/book-detail/${id}`} key={id} state={{title: title, author: author, year: year, description: description}}>
                    <h3>{title}</h3>
                </Link>
                <p>{author}</p>
                <p>{year}</p>
            </div>
            <div className='action'><MoveButton moveBook={moveBook} id={id}/> <DeleteButton deleteBook={deleteBook} id={id}/></div>
        </article>
    );
}

export default BookshelfItem;