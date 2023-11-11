import React from 'react';

function FormSearch() {
    return (
        <form id="searchBook">
            <label htmlFor="searchBookTitle">Judul</label>
            <input id="searchBookTitle" type="text" />
            <button id="searchSubmit" type="submit">Cari</button>
        </form>
    );
}

export default FormSearch;