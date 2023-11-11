import React from 'react';
import Navigation from './Navigation';
import MainSection from './MainSection';
import { getInitialData } from '../data';

class BookshelfApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: getInitialData(),
            searchBooks: [],
        }

        this.onAddBookHandler = this.onAddBookHandler.bind(this);
        this.onMoveBookHandler = this.onMoveBookHandler.bind(this);
        this.onDeleteBookHandler = this.onDeleteBookHandler.bind(this);
        // this.onSearchBookHandler = this.onSearchBookHandler.bind(this);
    }

    onAddBookHandler({title, author, year, description, isComplete}) {
        this.setState((prevState) => {
            return {
                books: [...prevState.books,
                    {
                        id: +new Date(),
                        title: title,
                        author: author,
                        year: year,
                        description: description,
                        isComplete: isComplete,
                    }
                ]
            }
        });
    }

    onMoveBookHandler = (id) => {
        this.setState(prevState => {
            const updatedBooks = prevState.books.map(book => {
                if (book.id === id) {
                    return {
                        ...book,
                        isComplete: !book.isComplete,
                    }
                }
                return book;
            });

            return {
                books: updatedBooks
            };
        });
    }

    onDeleteBookHandler = (id) => {
        const books = this.state.books.filter(book => book.id !== id);
        this.setState({ books });
    }

    // onSearchBookHandler = (bookTitle) => {
    //     this.setState(prevState => {
    //         prevState.searchBooks.splice(0, prevState.searchBooks.length);

    //         const regex = new RegExp("^(.*?(\\b(" + bookTitle + ")\\b)[^$]*)$", "i");

    //         for (const book of prevState.books) {
    //             if (book.title.search(regex) !== -1) {
    //                 prevState.searchBooks.push(book);
    //             }
    //         }

    //         console.log(prevState.searchBooks);
    //         return {
    //             books: prevState.searchBooks
    //         };
    //     });
    // }

    render() {
        return (
            <div>
                <Navigation />
                <MainSection titleSection={"Masukan Buku Baru"} books={this.state.books} addBook={this.onAddBookHandler} moveBook={this.onMoveBookHandler} deleteBook={this.onDeleteBookHandler}/>
            </div>
        );
    }
}

export default BookshelfApp;