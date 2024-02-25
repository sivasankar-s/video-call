import React from 'react'

const AlumniVideo = () => {

    const socket = io.connect('/');

    const [localvid, setLocalVid] = useState(null)
    const [remotevid, setRemoteVid] = useState(null)

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then((stream) => {
    // localVideo.srcObject = stream;
    setLocalVid(stream)
    socket.emit('videoStream', { room: 'my-room', video: stream });
  })
  .catch((error) => {
    console.error('Error accessing media devices.', error);
  });

socket.on('remoteVideo', (video) => {
//   remoteVideo.srcObject = video;
  setRemoteVid(stream)
});

  return (
    <div>
        <h1> Alumni video </h1>
        <video src={localvid} />
        <video src={remotevid} />
    </div>
  )
}

export default AlumniVideo