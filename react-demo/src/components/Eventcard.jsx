// function EventCard({
//   title,
//   date,
//   time,
//   location,
//   category,
//   description,
// }) {
//   return (
//     <article className="event-card">
//       <p className="event-category">{category}</p>

//       <h3>{title}</h3>

//       <p className="event-description">{description}</p>

//       <div className="event-details">
//         <p>
//           <strong>Date:</strong> {date}
//         </p>

//         <p>
//           <strong>Time:</strong> {time}
//         </p>

//         <p>
//           <strong>Location:</strong> {location}
//         </p>
//       </div>

//       <button type="button">View Details</button>
//     </article>
//   );
// }

// export default EventCard;

import {Link} from "react-router";
function EventCard({
  id,
  title,
  date,
  time,
  location,
  category,
  description,
}){
  return (
    <article className="event-card">
      <p className="event-category">
        {category}
      </p>
      <h3>{title}</h3>
      <p className="event-description">
        {description}
      </p>
      <div className="event-details">
        <p>
          <strong>Date:</strong>{date}
        </p>
        <p>
          <strong>Time:</strong>{time}
        </p>
        <p>
          <strong>Location:</strong>{location}
        </p>
      </div>
      <Link className="details-button"
            to={'/events/${id}'}>
      View Details
      </Link>

    </article>
  );
}
export default EventCard;

import {Link} from "react-router";
function EventCard({
  id,
  title,
  date,
  time,
  location,
  category,
  description,
}){
  function handleDeleteClick(){
    onDeleteEvent(id);
  }
  return (
    <article className="event-card">
      <p className="event-category">
        {category}
      </p>
      <h3>{title}</h3>
      <p className="event-description">
        {description}
      </p>
      <div className="event-details">
        <p>
          <strong>Date:</strong>{date}
        </p>
        <p>
          <strong>Time:</strong>{time}
        </p>
        <p>
          <strong>Location:</strong>{location}
        </p>
      </div>
      <Link className="details-button"
            to={'/events/${id}'}>
      View Details
      </Link>
      <button className="delete-button"
      type="button"
      onClick={handleDeleteClick}
      >Delete</button>

    </article>
  );
}
export default EventCard;