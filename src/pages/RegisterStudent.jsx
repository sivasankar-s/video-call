import React, { useRef } from 'react'
import '../index.css'
import { FaUserGraduate } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import { FaIdCardAlt } from "react-icons/fa";
import Navbar from '../components/Navbar'
import { signUpStudent } from '../actions/auth';

const RegisterStudent = () => {

  const depts = ['CSE', 'IT', 'ECE', 'EEE', 'MECH', 'CIVIL', 'AIML', 'AIDS', 'CSBS', 'MCA', 'MBA']

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const regNoRef = useRef();
  const phnRef = useRef();
  const yopRef = useRef();
  const deptRef = useRef();

  const user = {
    name: '',
    email: '',
    password: '',
    regNo: '',
    phone: 0,
    yearOfPassing: 0,
    dept: '',
    type: 'student',
    // company: '',
    // role: ''
  }

  const handleSubmit = async () => {
    user.name = nameRef.current.value;
    user.email = emailRef.current.value;
    user.password = passwordRef.current.value;
    user.phone = phnRef.current.value;
    user.regNo = regNoRef.current.value;
    user.yearOfPassing = yopRef.current.value;
    user.dept = deptRef.current.value;
    // user.company = companyRef.current.value;
    // user.role = roleRef.current.value;

    console.log(user);

    await signUpStudent(user)
  }

  return (
    <>
      <Navbar />
    <div className='flex flex-col w-screen h-screen justify-center items-center '>
    <div className='flex flex-col items-center py-8 w-2/5 rounded-lg shadow-2xl'>
            <h1 className='text-2xl font-bold mb-10'>Sign Up</h1>

            <div className=' w-3/4 flex flex-col items-center gap-y-4 '>
              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <FaUserGraduate className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={nameRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your name' required type="text"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <FaIdCardAlt className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={regNoRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your Register Number' required type="text"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <MdEmail className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={emailRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your email' required type="text"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <RiLockPasswordFill className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={passwordRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your password' required type="password"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <FaPhone className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={phnRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Your phone' required type="number"/>
              </div>

              <div className='flex justify-end relative w-full border-2 border-gray-400 outline-none rounded-md'>
              <GiGraduateCap className='absolute left-3 top-4 inline-block pointer-events-none' size={20} />
                <input ref={yopRef} className='text-xl ml-12 pl-2 pr-3 py-3 w-full rounded-md outline-none'  placeholder='Year of passing' required type="number"/>
              </div>
                
                
                
                  {/* <input className='text-xl p-3 w-full border-2 border-gray-400 outline-none rounded-md' placeholder='Your password' required type="password"/>
                  <input className='text-xl p-3 w-full border-2 border-gray-400 outline-none rounded-md appearance-none' placeholder='Your Phone' required type="number"/>
                  <input className='text-xl p-3 w-full border-2 border-gray-400 outline-none rounded-md' placeholder='Year of passing' required type="number"/> */}
                <div className='flex'>
                <label className='text-xl font-semibold mr-5 p-2'>Department </label>
                <select ref={deptRef} className='p-2'>
                  {depts.map((dept, index) => (<option key={index} value={dept}>{dept}</option>))}
                </select>
                </div>
                <button className='bg-cyan-800 text-white p-4 font-semibold rounded-lg text-xl mt-7'
                onClick={handleSubmit}
                >
                  Sign Up</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default RegisterStudent