function EventCard({
  title,
  date,
  time,
  location,
  category,
  description,
}) {
  return (
    <article className="event-card">
      <p className="event-category">{category}</p>

      <h3>{title}</h3>

      <p className="event-description">{description}</p>

      <div className="event-details">
        <p>
          <strong>Date:</strong> {date}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>

        <p>
          <strong>Location:</strong> {location}
        </p>
      </div>

      <button type="button">View Details</button>
    </article>
  );
}

export default EventCard;