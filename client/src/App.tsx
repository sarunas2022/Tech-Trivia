import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404page/NotFoundPage';
import Home from './pages/home/Home';
import Questions from './pages/questions/Questions';

import './App.css';
import { useState } from 'react';

const App: React.FC = () => {
    // const [topic, setTopic] = useState<string>('');

    // setTopic = {setTopic}
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/questions' element={<Questions />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default App;
