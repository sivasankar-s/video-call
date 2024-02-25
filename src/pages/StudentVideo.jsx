import React, { useState } from 'react'

const StudentVideo = () => {

    const socket = io.connect('/');

    const [vid, setVid] = useState(null)

    socket.on('message', (message) => {
        console.log(message);
      });

      socket.on('remoteVideo', (video) => {
        // remoteVideo.srcObject = video;
        setVid(video)
      });

      const [name, setName] = useState('')
      const [code, setCode] = useState('')

      const joinRoom = () => {
        
        socket.emit('joinRoom', { name, code });
      };

  return (
    <div>
        <h1>Student Video</h1>
        <video src={vid} width='300' />
        <input type='text' placeholder='Enter Name' onChange={(e) => setName(e.target.value)}/>
        <input type='text' placeholder='Enter Room Code' onChange={(e) => setCode(e.target.value)}/>
        <button onClick={joinRoom}>Join</button>
    </div>
  )
}

export default StudentVideo