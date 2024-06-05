import React, { useRef } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { signInAlumni } from '../actions/auth';
import Navbar from '../components/Navbar'
import { redirect } from 'react-router-dom';

const LoginAlumni = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const user = {
    email: '',
    password: '',
  }

  const handleSubmit = async () => {
    user.email = emailRef.current.value;
    user.password = passwordRef.current.value;

    console.log(user);

    await signInAlumni(user)

    // redirect('/');
  }

  return (
    <>
        <Navbar />
    <div className='flex flex-col w-screen h-screen justify-center items-center '>
        <h1 className='text-4xl mb-14 font-semibold'>Alumni Login</h1>
        <div className='flex flex-col items-center py-8 w-2/5 rounded-lg shadow-2xl'>
            <h1 className='text-2xl font-bold mb-10'>Sign In</h1>

            <div className=' w-3/4 flex flex-col items-center gap-y-4 '>
                {/* <input ref={emailRef} className='text-xl p-3 w-full border-2 border-gray-400 outline-none rounded-md' placeholder='Your email' required type="text"/>
                <input ref={passwordRef} className='text-xl p-3 w-full border-2 border-gray-400 outline-none rounded-md' placeholder='Your password' required type="password"/> */}
                

                <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <MdEmail className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={emailRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your email' required type="text"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <RiLockPasswordFill className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={passwordRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your password' required type="password"/>
              </div>
                
                <button className='bg-cyan-800 text-white p-4 font-semibold rounded-lg text-xl mt-7'
                onClick={handleSubmit}
                >
                  Sign In</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default LoginAlumni
