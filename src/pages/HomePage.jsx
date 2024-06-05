import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeAlumni from './HomeAlumni'
import EventCarousel from '@/components/EventCarousel'
import { getEves } from '@/actions/auth'

const HomePage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const [events, setEvents] = useState([]);
  const [liveEvents, setLiveEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  // const liveEvents1 = [
  //   { title: 'Live Event 1', host: 'Host A', startTime: Date.now(), endTime: Date.now() + 3600000, link: "https://google.com" },
  //   { title: 'Live Event 2', host: 'Host B', startTime: Date.now(), endTime: Date.now() + 7200000, link: "https://google.com" },
  // ];

  // const upcomingEvents1 = [
  //   { title: 'Upcoming Event 1', host: 'Host C', startTime: Date.now() + 86400000, endTime: Date.now() + 90000000 },
  //   { title: 'Upcoming Event 2', host: 'Host D', startTime: Date.now() + 172800000, endTime: Date.now() + 176400000 },
  // ];

  // const pastEvents1 = [
  //   { title: 'Past Event 1', host: 'Host E', startTime: Date.now() - 172800000, endTime: Date.now() - 86400000 },
  //   { title: 'Past Event 2', host: 'Host F', startTime: Date.now() - 259200000, endTime: Date.now() - 172800000 },
  // ];

  const filterEvents = async (eventsArray) => {
    const currentTime = Date.now();
    const live = [];
    const upcoming = [];
    const past = [];

    eventsArray.forEach((event) => {
      const { startTime, endTime } = event;
      if (currentTime >= new Date(startTime).getTime() && currentTime <= new Date(endTime).getTime()) {
        live.push(event);
      } else if (currentTime < new Date(startTime).getTime()) {
        upcoming.push(event);
      } else {
        past.push(event);
      }
    });

    setLiveEvents(live);
    setUpcomingEvents(upcoming);
    setPastEvents(past);
  

  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // const response = await fetch('YOUR_BACKEND_API_ENDPOINT'); // Replace with your backend API endpoint
        const response = await getEves();
        // const data = await response.json().result;
        // if (Array.isArray(data)) {
          setEvents(response.result);
          filterEvents(response.result);
        // } else {
          // console.error('Fetched data is not an array:', data);
        // }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, [])
  

  return (
    <>
    {/* <div>HomePage</div> */}
    <Navbar />
    {/* <h1 className='text-8xl font-semibold'>Connect with <span className='bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text'>Alumni</span> </h1> */}
    {/* <Link to='/alumniHome' className='p-3 bg-blue-500 font-semibold text-lg'>Video Call</Link> */}

    <div className='h-[90vh] flex flex-col justify-center items-center'>
      <h1 className='text-7xl font-semibold mb-10'>Welcome to AlumniHub</h1>
      <h3 className='text-lg font-semibold mb-10'>A place where students and alumni can find each other, interact, collaborate and network..</h3>
      <div className='flex justify-center'>
        <Link to='/search' className='p-3 bg-blue-500 font-semibold text-lg mr-7 rounded-lg'>Search People</Link>
        <Link to='/chatroom' className='p-3 border-2 border-black font-semibold text-lg mr-7 rounded-lg'>Chatroom</Link>
        {user && <Link to='/createEvent' className='p-3 border-2 border-black font-semibold text-lg rounded-lg'>Create Event</Link>}
      </div>
    </div>

    <div className="container mx-auto p-4">
      <EventCarousel title="Live Events" events={liveEvents} isLive={true} />
      <EventCarousel title="Upcoming Events" events={upcomingEvents} isLive={false} />
      <EventCarousel title="Past Events" events={pastEvents} isLive={false} />
    </div>
    
    </>
  )
}

export default HomePage
