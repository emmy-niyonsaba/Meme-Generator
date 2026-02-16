import React from 'react'
import { log } from '/public/images'
const Header = () => {
  return (
    <div className=' flex items-center p-2 bg-blue-500 text-white'>
      <img src={log} alt="Logo"  className=' w-20  rounded-full'/>
      <h1 className=' text-3xl font-bold ml-2'>Meme Generator by Emmanuel</h1>
    </div>
  )
}

export default Header
