import React, { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/404page/NotFoundPage';
import Home from './pages/home/Home';
import './App.css';

export const AuthContext = createContext<any>(null);

const App: React.FC = () => {
return (
<AuthContext.Provider value={null}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="" element={<NotFound />} />
</Routes>
</AuthContext.Provider>
);
};

export default App;