import React from 'react';
import { createRoot } from 'react-dom/client';
import BookshelfApp from './components/BookshelfApp';

import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<BookshelfApp />);