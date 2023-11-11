import React from 'react';
import TitleSection from './TitleSection';
import FormSearch from './FormSearch';

function SearchSection({titleSection}) {
    return (
        <section className="search_section">
            <TitleSection titleSection={titleSection}/>
            <FormSearch/>
        </section>
    );
}

export default SearchSection;