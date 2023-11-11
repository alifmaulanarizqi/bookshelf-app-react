import React from 'react';
import TitleSection from './TitleSection';
import FormInput from './FormInput';

function InputSection({titleSection, addBook}) {
    return (
        <section className="input_section">
            <TitleSection titleSection={titleSection}/>
            <FormInput addBook={addBook}/>
        </section>
    );
}

export default InputSection;