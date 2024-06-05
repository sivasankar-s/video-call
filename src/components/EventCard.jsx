import React from 'react';
import { Link } from 'react-router-dom';

const EventCard = ({ event, isLive }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 w-80">
      <h3 className="text-lg font-bold mb-4">{event.title}</h3>
      {/* <p className="text-gray-600">Host: {event.host}</p> */}
      <p className="text-gray-600 mb-2">Start: {new Date(event.startTime).toLocaleString()}</p>
      <p className="text-gray-600 mb-5">End: {new Date(event.endTime).toLocaleString()}</p>
      {isLive && (
        <Link to={event.link} target='_blank' className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Now
        </Link>
      )}
    </div>
  );
};

export default EventCard;
