import React from 'react';
import EventCard from './EventCard';

const EventCarousel = ({ title, events, isLive }) => {
  // console.log(title)
  // console.log(events)
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {events.length==0 && 
          <p className="text-gray-500 text-lg">No Events</p>
        }
        {events.map((event, index) => (
          <EventCard key={index} event={event} isLive={isLive} />
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
