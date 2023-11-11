import React from 'react';

function DeleteButton({deleteBook, id}) {
    return (
        <button className='red' onClick={() => deleteBook(id)}>Hapus</button>
    );
}

export default DeleteButton;