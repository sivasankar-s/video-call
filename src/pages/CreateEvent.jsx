import { createEve } from '@/actions/auth';
import React, { useState } from 'react'

const CreateEvent = () => {
    const [eventTitle, setEventTitle] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [eventLink, setEventLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const event = {
      title: eventTitle,
      startTime: new Date(startTime).getTime(),
      endTime: new Date(endTime).getTime(),
      link: eventLink,
    };
    console.log(event);
    // Here you can add logic to send event to a server or handle it as needed
    await createEve(event);
    alert("Event Created..")
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventTitle">
            Event Title
          </label>
          <input
            type="text"
            id="eventTitle"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startTime">
            Start Time
          </label>
          <input
            type="datetime-local"
            id="startTime"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endTime">
            End Time
          </label>
          <input
            type="datetime-local"
            id="endTime"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="eventLink">
            Event Link
          </label>
          <input
            type="url"
            id="eventLink"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={eventLink}
            onChange={(e) => setEventLink(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateEvent