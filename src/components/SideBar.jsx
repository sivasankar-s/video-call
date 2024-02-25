import React, { useState, useContext } from 'react';
// import { Button, TextField, Grid, Typography, Container, Paper } from '@material-ui/core';
// import { CopyToClipboard } from 'react-copy-to-clipboard';
// import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
// import { makeStyles } from '@material-ui/core/styles';

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
              <h6>Account Info</h6>
              <input label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              {/* <CopyToClipboard text={me} className={classes.margin}> */}
              <input value={me}/>
                <button type='button' fullWidth>
                  Copy Your ID
                </button>
              {/* </CopyToClipboard> */}
            </div>
            <div>
              <h6>Make a call</h6>
              <input label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
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