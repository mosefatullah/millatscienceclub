import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { api } from "./../utils/data";
import { Link } from "react-router";

function Events() {
 const [events, setEvents] = useState([]);

 useEffect(() => {
  fetch(api + "/event/list")
   .then((response) => response.json())
   .then((d) => setEvents(d.data));
 }, []);

 return (
  <div>
   <Helmet>
    <title>Events</title>
    <meta name="description" content="The events organized by the club." />

    <link rel="canonical" href="https://mscbd.org/activity/events" />
   </Helmet>

   <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-10 mb-5">
    Events
   </h1>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 p-4 mx-auto max-w-6xl mb-12">
    {Array.isArray(events) &&
     events.map((event) => (
      <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
       <img
        class="rounded-t-lg aspect-[16/9] h-48 w-full object-cover bg-gray-300 dark:bg-gray-700"
        src={event.picture || "/msc.jpg"}
        alt=""
       />
       <div class="p-5">
        <Link to={`/activity/event/${event.event_id}`}>
         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline-offset-4 underline decoration-blue-500/50 decoration-2">
          {event.title || "Error occured"}
         </h5>
         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {event.description || "No description available."}
         </p>
        </Link>
        <a
         href={event.direct_link || event.registration_link}
         class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
         {event.direct_link ? "Event Details" : "Registration Link"}
        </a>
       </div>
      </div>
     ))}
   </div>
  </div>
 );
}

export default Events;
