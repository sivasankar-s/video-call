import React, { useRef, useState, useEffect } from 'react'
import io from 'socket.io-client';
// import SimplePeer from 'simple-peer/simplepeer.min.js';

import { useParams } from 'react-router-dom';
// import simplepeerMin from 'simple-peer/simplepeer.min.js';
// import Peer from 'simple-peer'
import Peer from 'simple-peer';

const Video = (props) => {
    const ref = useRef();

    useEffect(() => {
        props.peer.on("stream", stream => {
            ref.current.srcObject = stream;
        })
    }, []);

    return (
        <video className='h-[30%] w-1/2' playsInline autoPlay ref={ref} />
    );
}

const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
};

const GroupRoom = (props) => {

    

    const [peers, setPeers] = useState([]);
    const socketRef = useRef();
    const userVideo = useRef();
    const peersRef = useRef([]);
    const {roomID} = useParams();
    // const roomID = props.match.params.roomID;

    useEffect(() => {
        console.log(roomID)
        socketRef.current = io.connect("http://localhost:5000/");
        navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: true }).then(stream => {
            userVideo.current.srcObject = stream;
            socketRef.current.emit("join room", roomID);
            socketRef.current.on("all users", users => {
                const peers = [];
                console.log(users)
                users.forEach(userID => {
                    console.log('in foreach')
                    const peer = createPeer(userID, socketRef.current.id, stream);
                    console.log(peer)
                    peersRef.current.push({
                        peerID: userID,
                        peer,
                    })
                    peers.push(peer);
                })
                setPeers(peers);
            })

            socketRef.current.on("user joined", payload => {
                const peer = addPeer(payload.signal, payload.callerID, stream);
                console.log(peer)
                peersRef.current.push({
                    peerID: payload.callerID,
                    peer,
                })

                setPeers(users => [...users, peer]);
            });

            socketRef.current.on("receiving returned signal", payload => {
                const item = peersRef.current.find(p => p.peerID === payload.id);
                item.peer.signal(payload.signal);
            });
        })
    }, [roomID]);

    function createPeer(userToSignal, callerID, stream) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' }  // Correct format for STUN server
                ],
                },
                stream,
        });

        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })

        // peer.on('signal', (data) => {
        //     if (data. renegotiate || data.transceiverRequest) return
        //   })

        return peer;
    }

    function addPeer(incomingSignal, callerID, stream) {
        const peer = new Peer({
            initiator: false,
            trickle: false,
           
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' }  // Correct format for STUN server
                ],
            },
            stream,
        })

        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })


        peer.on("stream", stream => {
            const item = {
                peerID: callerID,
                peer,
                stream,
            };
            peersRef.current.push(item);
            setPeers(users => [...users, peer]);
        });

        // peer.on('signal', (data) => {
        //     if (data.renegotiate || data.transceiverRequest) return
        //   })

        peer.signal(incomingSignal);

        return peer;
    }

  return (
    <div>
        <h1>Group Room</h1>

        <div className='flex flex-wrap'>
            <h1>my video</h1>
            <video className='h-[40%] w-1/2' muted ref={userVideo} autoPlay playsInline />
            {console.log(peers)}
                {peers.map((peer, index) => {
                    return (
                        <>
                        <Video key={index} peer={peer} />
                        <h1>v1</h1>
                        </>
                    );
                })}
        </div>
    </div>
  )
}

export default GroupRoom