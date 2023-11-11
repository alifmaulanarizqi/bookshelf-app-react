import React from 'react';

function MoveButton({moveBook, id}) {
    return (
        <button className='green' onClick={() => moveBook(id)}>Pindahkan</button>
    );
}

export default MoveButton;