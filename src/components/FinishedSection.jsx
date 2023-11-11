import React from 'react';
import TitleSection from './TitleSection';
import BookshelfItem from './BookshelfItem';

function FinishedSection({ titleSection, books, moveBook, deleteBook}) {
    const completedBooks = books.filter(book => book.isComplete);

    return (
        <section className='book_shelf'>
            <TitleSection titleSection={titleSection}/>
            <div id="completeBookshelfList" className="book_list">
                {
                    completedBooks.map((book) => (
                        <BookshelfItem key={book.id} id={book.id} moveBook={moveBook} deleteBook={deleteBook} {...book} />
                    ))
                }
            </div>
        </section>
    );
}

export default FinishedSection;