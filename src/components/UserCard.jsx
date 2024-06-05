import React, { useState } from 'react'
import Avatar from 'react-avatar'
import UserModal from './UserModal';

const UserCard = ({name, dept, yearOfPassing, user}) => {

    const [isUserModalOpen, setIsUserModalOpen] = useState(false);

    const openUserModal = () => {
        setIsUserModalOpen(true);
      };
      
      const closeUserModal = () => {
        setIsUserModalOpen(false);
      };

      function caps(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


  return (
    <div className='shadow-lg rounded-lg bg-white p-4 pb-6 max-w-sm w-full mx-auto overflow-hidden '>
        <div className='flex justify-center'>
        <Avatar 
        name={name}
        size={100}
        className='w-24 h-24 rounded-full'
        />
        </div>
        <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{caps(name)}</h2>
        <p className="text-gray-600">{dept}</p>
        <p className="text-gray-600">Year of Passing: {yearOfPassing}</p>
        <div className="mt-4">
          <button
            onClick={openUserModal}
            className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold py-2 px-4 rounded-full cursor-pointer"
          >
            Read more
          </button>

            {/* {isUserModalOpen && ( */}
                <UserModal
                    isOpen={isUserModalOpen}
                    handleClose={closeUserModal}
                    user={user}
                />
            {/* )} */}

          </div>
          </div>

        
        
    </div>
  )
}

export default UserCard