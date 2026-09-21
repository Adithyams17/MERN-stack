// // import "./App.css";
// // import Navbar from "./Components/Navbar";
// // function App(){
// //   return(
// //     <div>
// //       <Navbar />
// //       <main id = "home">
// //         <h1>College Course Explorer</h1>
// //         <p>React Learning Project</p>
// //       </main>
// //     </div>
// //   );
// // }
// // export default App;
// import"./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/hero";
// import EventSection from "./components/EventSection";
// import Footer from "./components/Footer";
// function App(){
//   return(
//     <div>
//       <Navbar />
//       <main id="home">
//       <Hero />
//       <EventSection />
//       </main>
//       <Footer />
//     </div>
//   );
// }
// export default App;

import React, { useState } from "react";
import "./App.css";

const initialForm = {
  title: "",
  category: "Workshop",
  date: "",
  location: "",
  description: "",
};

function App() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Meetup",
      category: "Workshop",
      date: "2026-10-12",
      location: "Bengaluru",
      description: "A great event for learning and networking.",
    },
  ]);

  const [formData, setFormData] = useState(initialForm);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, category, date, location, description } = formData;

    if (!title || !category || !date || !location || !description) {
      setError("Please fill in all fields before adding an event.");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      category,
      date,
      location,
      description,
    };

    setEvents((prev) => [newEvent, ...prev]);
    setFormData(initialForm);
    setError("");
  };

  return (
    <div>
      <nav className="Navbar">
        <h2>EventPulse</h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#add-event">Add Event</a>
        </div>
      </nav>

      <section id="home">
        <h1>Discover the Best Events Around You</h1>
        <p>Explore, learn, and connect</p>
      </section>

      <section className="hero">
        <p className="hero-label">Upcoming Highlights</p>
        <h1>Find your next unforgettable experience</h1>
        <p className="hero-description">
          From workshops to community meetups, discover events that match your
          interests and goals.
        </p>
        <a href="#add-event" className="hero-button">
          Add an Event
        </a>
      </section>

      <section id="events" className="events-section">
        <p className="section-label">Events</p>
        <h2>Popular events</h2>

        <div className="event-grid">
          {events.map((event) => (
            <article key={event.id} className="event-card">
              <p className="event-category">{event.category}</p>
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <p>{event.description}</p>
              <button type="button">Book Now</button>
            </article>
          ))}
        </div>
      </section>

      <section id="add-event" className="event-form-section">
        <p className="section-label">Add Event</p>
        <h2>Create a New Event</h2>

        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Event Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Workshop">Workshop</option>
              <option value="Conference">Conference</option>
              <option value="Meetup">Meetup</option>
              <option value="Seminar">Seminar</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="submit-button">
            Add Event
          </button>
        </form>
      </section>

      <footer className="footer">
        <h2>Stay connected</h2>
        <p>Find events that match your community and interests.</p>
      </footer>
    </div>
  );
}

export default App;