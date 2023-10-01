import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const SideMenu = () => {
  return (
    <div className='font-poppins font-medium'>
      <div className='bg-black p-4 rounded-full cursor-pointer'>
        <AiOutlinePlus color='white' size='20'/>
      </div>
    </div>
  )
}
