import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Peer from 'simple-peer/simplepeer.min';

const VideoRoom = () => {

    const [stream, setStream] = useState(null);
    const [peers, setPeers] = useState([]);
    const [roomCode, setRoomCode] = useState('');
    const socket = io('http://localhost:5000');

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then((stream) => {
            setStream(stream);
            socket.emit('join room', roomCode);
    
            socket.on('participants', (participants) => {
              const newPeers = [];
              participants.forEach((participant) => {
                const peer = createPeer(participant, socket.id, stream);
                newPeers.push({ id: participant, peer });
              });
              setPeers(newPeers);
            });
    
            socket.on('offer', handleReceiveCall);
            socket.on('answer', handleAnswer);
            socket.on('candidate', handleNewICECandidateMsg);
          })
          .catch((err) => console.error('Error accessing media devices:', err));
    
        // Clean up
        return () => {
          socket.disconnect();
        };
      }, [roomCode]);

      const createPeer = (participantId, callerId, stream) => {
        const peer = new Peer({
          initiator: true,
          trickle: false,
          stream,
        });
    
        peer.on('signal', (data) => {
          socket.emit('offer', {
            target: participantId,
            caller: callerId,
            offer: data,
          });
        });
    
        return peer;
      };
    
      const handleReceiveCall = (offer) => {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream,
        });
    
        peer.on('signal', (data) => {
          socket.emit('answer', { target: offer.caller, answer: data });
        });
    
        peer.signal(offer.offer);
    
        setPeers((prevPeers) => [...prevPeers, { id: offer.caller, peer }]);
      };
    
      const handleAnswer = (answer) => {
        const peer = peers.find((p) => p.id === answer.target);
        if (peer) {
          peer.peer.signal(answer.answer);
        }
      };
    
      const handleNewICECandidateMsg = (candidate) => {
        const peer = peers.find((p) => p.id === candidate.target);
        if (peer) {
          peer.peer.signal(candidate.candidate);
        }
      };
    
      const handleRoomJoin = () => {
        // Logic to join a room
        // Set up UI for room code input
        // Call setRoomCode with the entered room code
      };

  return (
    <div>
        <h1>WebRTC Broadcast</h1>
      <div>
        {stream && (
          <video
            playsInline
            muted
            autoPlay
            style={{ width: '300px', height: '200px', margin: '10px' }}
            ref={(ref) => {
              if (ref) {
                ref.srcObject = stream;
              }
            }}
          />
        )}
        {peers.map((peer) => (
          <video
            key={peer.id}
            playsInline
            autoPlay
            style={{ width: '300px', height: '200px', margin: '10px' }}
            ref={(ref) => {
              if (ref) {
                peer.peer.on('stream', (stream) => {
                  ref.srcObject = stream;
                });
              }
            }}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Room Code"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button onClick={handleRoomJoin}>Join Room</button>
      </div>
    </div>
  )
}

export default VideoRoom