import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

const Github = () => {

  const data = useLoaderData()
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Event handler to get the input value
  const getValue = () => {
    console.log('Input value:', inputValue);

  };

  return (
    <>
      <div className='flex justify-center align-middle mt-3 mb-5 m-auto items-center'>
        <img src={data.avatar_url} alt="img" width={150} className=' rounded-full ' />
        <div className="flex-row">
          <h1 className='m-3  p-3'>{data.name}</h1>
          <h1 className='m-3  p-3 w-80'>{data.bio}</h1>
          <h1 className='m-3 bg-zinc-500 p-3 text-white rounded-lg font-medium inline'>Followers : {data.followers.toString().slice(0, 2) +"K" }</h1>
          <h1 className='m-3 bg-zinc-500 p-3 text-white rounded-lg font-medium inline'>Following : {`${data.following>1000?`${data.following.toString().slice(0, 1) +"K"}`:`.${data.following.toString().slice(0, 1) +"K"}`}`}</h1>
          <button>click</button>
        </div>
      </div>
    </>
  )
}

export default Github
export const gitHubLoader = async () => {
  let inputValue = 'github'
  const response = await fetch(`https://api.github.com/users/${inputValue}`)
  return response.json()
}
