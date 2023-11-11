import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookshelfApp from './components/BookshelfApp';
import BookDetail from './components/BookDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookshelfApp />} />
                <Route path="/book-detail/:bookId" element={<BookDetail />} />
            </Routes>
        </Router>
    );
}

export default App;