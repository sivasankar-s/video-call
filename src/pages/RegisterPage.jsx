import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const RegisterPage = () => {
  return (
    <>
    <Navbar />
    <div className='flex h-screen w-screen border-4'>
        <div className='bg-gray-100 w-full flex justify-center items-center'>
            <div className='w-1/2 flex flex-col  items-center'>
                <h2 className='text-3xl mb-5'>For <span className='bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text'>Alumni</span></h2>
                <p className='text-lg mb-7 text-center'>Interact with students, create events and share your knowledge</p>
                <Link to="/alumniRegister" className='bg-gray-600 w-1/3 text-center text-white p-3 rounded-md font-semibold'>Sign Up</Link>
            </div>
        </div>
        <div className='w-full bg-white flex justify-center items-center'>
        {/* <div className='w-1/2 flex flex-col justify-center'> */}
            <div className='w-1/2 flex flex-col items-center'>
                <h2 className='text-3xl mb-5'>For <span className='bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text'>Students</span></h2>
                <p className='text-lg mb-7 text-center'>Chat with alumni, attend events and expand your knowledge</p>
                <Link to="/studentRegister" className='border-2 border-black w-1/3 text-center text-black p-3 rounded-md font-semibold'>Sign Up</Link>
            </div>
            {/* </div> */}
        </div>
    </div>
    </>
  )
}

export default RegisterPage