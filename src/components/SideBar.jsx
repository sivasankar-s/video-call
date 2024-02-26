import React, { useState, useContext } from 'react';

import { SocketContext } from '../Context';



const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');

  return (
    <div>
      <div>
        <form  noValidate autoComplete="off">
          <div>
            <div>
              <input label="Name" className='border-black border-2 text-md mt-10' placeholder='Your username' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <div className='flex'>
              <h6 className='mr-5'>Your ID:</h6>
              <input value={me}/>
              </div>
              
            </div>
            <div>
              <input label="ID to call" className='border-2 border-black' placeholder='Enter ID to call' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <button type='button' fullWidth onClick={leaveCall} className='bg-red-600 p-3'>
                  Hang Up
                </button>
              ) : (
                <button type='button' fullWidth onClick={callUser(idToCall)} className='bg-green-500 p-3'>
                  Call
                </button>
              )}
            </div>
          </div>
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;