// ...existing code...
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailsPage from "./pages/EventDetailsPage";
import AboutPage from "./pages/AboutPage";

import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<HomePage events={events} onAddEvent={handleAddEvent} />}
        />

        <Route
          path="/events"
          element={<EventsPage events={events} />}
        />

        <Route
          path="/events/:eventId"
          element={<EventDetailsPage events={events} />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;