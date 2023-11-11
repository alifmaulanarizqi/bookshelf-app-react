import React from 'react';
import InputSection from './InputSection';
import SearchSection from './SearchSection';
import UnfinishedSection from './UnifinishedSection';
import FinishedSection from './FinishedSection';

function MainSection({books, addBook, moveBook, deleteBook}) {
    return (
        <main>
            <InputSection titleSection={"Masukan Buku Baru"} addBook={addBook}/>
            <SearchSection titleSection={"Cari Buku (Belum Implement)"} />
            <UnfinishedSection titleSection={"Belum selesai dibaca"} books={books} moveBook={moveBook} deleteBook={deleteBook}/>
            <FinishedSection titleSection={"Selesai dibaca"} books={books} moveBook={moveBook} deleteBook={deleteBook}/>
        </main>
    );
}

export default MainSection;