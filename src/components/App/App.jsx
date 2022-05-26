import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './App.scss';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Train from '../Train/Train';

function App(props) {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Link to="/profile">Profile</Link>} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/train" element={<Train />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
