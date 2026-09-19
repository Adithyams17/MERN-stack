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

import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventForm from "./components/Eventform";
import EventSection from "./components/EventSection";
import Footer from "./components/Footer";
import { initialEvents } from "./data/events";

function App() {
  const [events, setEvents] = useState(initialEvents);

  function handleAddEvent(newEvent) {
    setEvents([...events, newEvent]);
  }

  return (
    <div>
      <Navbar />

      <main id="home">
        <Hero
          title="Discover What Is Happening on Campus"
          description="Find workshops, sports activities, club meetings, and opportunities to connect with other students."
        />

        <EventForm onAddEvent={handleAddEvent} />

        <EventSection events={events} />
      </main>

      <Footer />
    </div>
  );
}

export default App;