import React from 'react'
import Navbar from '../components/Navbar'
// import CreateRoom from '../components/CreateRoom'
import VideoPlayer from '../components/VideoPlayer'
import Sidebar from '../components/SideBar'
import Notifications from '../components/Notification'

import { ContextProvider } from '../Context';
// import {v1 as uuid} from 'uuid'

const HomeAlumni = () => {

    

  return (
    <>
    {/* <Navbar /> */}
    {/* <div>HomeAlumni</div> */}
    {/* <button className='text-lg bg-blue-500 font-semibold p-3' onClick={create}>Create room</button> */}
    {/* <CreateRoom /> */}

    <ContextProvider>
    <VideoPlayer />
      <Sidebar>
        <Notifications />
      </Sidebar>
      </ContextProvider>
    
    </>
  )
}

export default HomeAlumni