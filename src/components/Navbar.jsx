import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import useAuthStore from '../store'

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user)

  let navigate = useNavigate();

  const logOut = () => {

    //dispatch
    // const {logout} = useAuthStore();
    // logout()
    // useAuthStore.getState().logout()
    localStorage.clear()

    // redirect('/')
    navigate('/')


    // localStorage.clear()

    setUser(null)
  }

  useEffect(() => {
    const token = user?.token;


    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [localStorage])

  return (
    <>
    <div className='flex space-x-12 justify-end pr-5 py-4 bg-transparent absolute right-0 left-0 '>
      <h1 className='text-xl'>{user?.data.result.name}</h1>
      { !user && (
        <>
        <Link to="/login" className=' rounded-md font-bold text-lg text-gray-900 hover:text-black transition-colors ease-in-out'>Login</Link>
        <Link to="/register" className=' rounded-md font-bold text-lg text-gray-900 hover:text-black transition-colors ease-in-out'>Register</Link>
        </>
      )}

        {user && <button onClick={logOut} className='text-lg' >Logout</button>}
    </div>

    </>
  )
}

export default Navbar