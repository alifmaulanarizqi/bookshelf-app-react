import React from 'react';
import TitleSection from './TitleSection';
import BookshelfItem from './BookshelfItem';

function UnfinishedSection({ titleSection, books, moveBook, deleteBook }) {
    const unCompletedBooks = books.filter(book => book.isComplete === false);

    return (
        <section className='book_shelf'>
            <TitleSection titleSection={titleSection}/>
            <div id="incompleteBookshelfList" className="book_list">
                {
                    unCompletedBooks.map((book) => (
                        <BookshelfItem key={book.id} id={book.id} moveBook={moveBook} deleteBook={deleteBook} {...book} />
                    ))
                }
            </div>
        </section>
    );
}

export default UnfinishedSection;