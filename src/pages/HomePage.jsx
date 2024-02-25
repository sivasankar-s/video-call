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
    <h1 className='text-8xl font-semibold'>Connect with <span className='bg-gradient-to-r from-blue-700 to-blue-400 text-transparent bg-clip-text'>Alumni</span> </h1>
    <Link to='/alumniHome' className='p-3 bg-blue-500 font-semibold text-lg'>Video Call</Link>
    
    <h1 className='text-4xl'>{user?.data.result.name}</h1>
    </>
  )
}

export default HomePage