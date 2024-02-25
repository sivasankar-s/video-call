import React from 'react'
import { useNavigate } from 'react-router-dom';
import {v1 as uuid} from 'uuid'

const CreateRoom = (props) => {

    const navigate = useNavigate();

    function create() {
        const id = uuid();
        // props.history.push(`/room/${id}`);
        navigate(`/room/${id}`)
    }

  return (
    <button className='text-lg bg-blue-500 font-semibold p-3' onClick={create}>Create room</button>
  )
}

export default CreateRoom