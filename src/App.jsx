import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/events/Events';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import NavigationBar from './components/events/NavigationBar';
import EventDetails from './components/events/EventDetails';
import AddEvent from './components/events/AddEvent';
import UpdateEvent from './components/events/UpdateEvent';
import Favorites from './components/events/Favorites';

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/add" element={<AddEvent />} />
        <Route path="/update/:id" element={<UpdateEvent />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;