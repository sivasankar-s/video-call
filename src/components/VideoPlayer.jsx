import React, { useContext } from 'react';

import { SocketContext } from '../Context';

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

    return (
        <div>
            { stream && (
                <video playsInline muted ref={myVideo} autoPlay />
            )}
            {
                callAccepted && !callEnded && (
                    <>
                    <h1>{call.name}</h1>
                <video playsInline muted ref={userVideo} autoPlay />
                </>
                )
            }
        </div>
    )
}

export default VideoPlayer