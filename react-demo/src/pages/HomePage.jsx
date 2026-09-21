import EventForm from "../components/EventForm";
import EventSection from "../components/EventSection";
import Hero from "../components/Hero";

function HomePage({events,onAddEvent}){
    return(
        <>
        <Hero title="Discover what is happening in Campus"
        description="Find workshops,sports,activities,club Meeting,and opportunities to connect with other students."/>
        <EventForm onAddEvent={onAddEvent}/>
        <EventSection events={events}/>
        </>
    );
}
export default HomePage;