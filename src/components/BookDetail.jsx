import React from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';

function BookDetail() {
    const location = useLocation();
    console.log(location.state.description);

    return (
        <div>
            <Navigation/>
            <div className='book-detail'>
                <h2>{location.state.title}</h2>
                <p>Author: {location.state.author}</p>
                <p>Tahun Terbit: {location.state.year}</p>
                <p>Deskripsi: {location.state.description}</p>
            </div>
        </div>
    );
}

export default BookDetail;