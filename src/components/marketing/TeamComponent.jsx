import React from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function TeamCoponent({image,names,fb,tw,ig}) {
  return (
    <div className='border-2 rounded-xl w-[270px] flex justify-center items-center hover:bg-gradient-to-r from-linearx via-lineary to-linearz '>
        <div className='p-5 flex flex-col gap-5'>
      <div>
        <img src={image} alt="" 
        className='rounded-t-xl'
        />
      </div>
      <hr className='border-[3px] border-blue-500 w-[100px] rounded-md mx-auto'/>
      <p className='text-center text-white'>
        {names}
      </p>
      <div className='flex flex-row gap-5 justify-center text-white'>
      <a href={fb}><FaFacebook /></a>
      <a href={tw}><FaSquareXTwitter /></a>
      <a href={ig}><RiInstagramFill /></a>
      </div>
      </div>
    </div>
  )
}

export default TeamCoponent
