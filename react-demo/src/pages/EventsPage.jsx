import EventSection from "../components/EventSection";

function EventsPage({events}){
    return(
        <>
        <section>
            <p className="section-label">
                All Campus Activities
            </p>
            <h1>Events</h1>
            <p>Explore all workshops,clubs,sports, and cultural activities</p>
        </section>
        <EventSection events={events}/>
        </>
    );
}
export default EventsPage;