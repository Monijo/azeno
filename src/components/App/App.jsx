import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.scss';

function App(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Link to="/profile">Profil</Link>} />
                <Route path="/profile" element={<Link to="/">Home</Link>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
