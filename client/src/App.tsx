import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404page/NotFoundPage';
import Home from './pages/home/Home';
import Questions from './pages/questions/Questions';

import './App.css';

const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/questions' element={<Questions />} />
        </Routes>
    );
};

export default App;
