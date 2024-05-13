import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import HomeAlumni from './HomeAlumni'

const HomePage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

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
        <Link to='/chatroom' className='p-3 border-2 border-black font-semibold text-lg rounded-lg'>Chatroom</Link>
      </div>
    </div>
    
    </>
  )
}

export default HomePage
