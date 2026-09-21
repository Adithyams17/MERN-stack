import EventCard from "./Eventcard";

function EventSection({ events }) {
  return (
    <section id="events" className="event-section">
      <div className="section-heading">
        <div>
          <p className="section-label">
            Upcoming Activities
          </p>

          <h2>Explore Campus Events</h2>
        </div>

        <p>{events.length} events available</p>
      </div>

      <div className="event-grid">
        {events.map(function (event) {
          return (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              category={event.category}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
            />
          );
        })}
      </div>
    </section>
  );
}

export default EventSection;