/*import React, { useEffect, useState } from 'react'*/
import { useLoaderData } from 'react-router-dom';
function Github() {
  const data = useLoaderData();
 /* const [data,setdata] = useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/adityalaxkar123')
    .then(res=> res.json())
    .then(data => setdata(data))
  },)*/
  return (
    <>
    <div className=' mt-2 mb-2 text-wrap text-center text-white text-3xl p-4 mx-14 bg-gray-700'>Github Followers:{data.followers}
    <img className='mt-2' src={data.avatar_url} alt="" width='300px' />
    </div>
    
    </>
  )
}

export default Github;

export const githubLoaderInfo = async()=>{
const response = await fetch('https://api.github.com/users/adityalaxkar123')
return response.json();
}