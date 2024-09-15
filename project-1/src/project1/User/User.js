import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid} = useParams();
  return (
    <>
        <div className='text-center text-3xl text-wrap bg-gray-600 p-4 mx-14 text-white'>User:{userid}</div>
    </>
  )
}

export default User
