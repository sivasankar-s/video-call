import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const UserModal = ({isOpen, handleClose, user}) => {

    if (!isOpen) {
        return null;
      }

    let modalContent;
    if (user.type === 'student') {
      modalContent = (
        <div className="bg-white rounded-lg  p-4 w-72 mx-auto">
            
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-7">{user.name}</h2>
           

            <div className='space-y-5'>
            <p><span className='font-semibold'>Reg. No: </span>{user.regNo}</p>
            <p><span className='font-semibold'>Email: </span>{user.email}</p>
            <p><span className='font-semibold'>Year of Passing: </span> {user.yearOfPassing}</p>
            <p><span className='font-semibold'>Department: </span>{user.dept}</p>

            </div>
          </div>
          
        </div>
      );
    } else if (user.type === 'alumni') {
      modalContent = (
        <div className="bg-white rounded-lg p-4 w-72 mx-auto">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-7">{user.name}</h2>
            {/* <p>Registration Number: {user.regNo}</p> */}
            <div className='space-y-5'>
            <p><span className='font-semibold'>Email: </span>{user.email}</p>
            <p><span className='font-semibold'>Year of Passing: </span> {user.yearOfPassing}</p>
            <p><span className='font-semibold'>Department: </span>{user.dept}</p>
            <p><span className='font-semibold'>Company: </span>{user.company}</p>
            <p><span className='font-semibold'>Role: </span> {user.role}</p>

            </div>
            
          </div>
          {/* <button
            onClick={handleClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            Close
          </button> */}
        </div>
      );
    }
  
    return (
      <div className="fixed inset-0 top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        
        <div className="relative bg-white rounded-lg p-4 shadow-md">
        <div className='flex justify-end'>
            <button
            onClick={handleClose}
            className=" hover:text-red-400 text-gray-800 font-bold  text-lg rounded inline-flex items-center"
          >
            <IoCloseSharp />
          </button>
            </div>
            
            {modalContent}
        </div>
      </div>
    );
}

export default UserModal