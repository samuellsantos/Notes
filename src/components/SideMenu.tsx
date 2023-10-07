import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { ColorSelect } from './ColorSelect'

export const SideMenu = () => {
  const [displayColor, setDisplayColor] = useState(false)

  function toggleColor() {
    setDisplayColor(!displayColor)
  }

  return (
    <div className='font-poppins font-medium flex flex-col items-center gap-4'>
      <div className='text-2xl font-bold'>
        Notes
      </div>
      <div className={`bg-black p-4 rounded-full cursor-pointer hover:animate-pulse ${displayColor && 'rotate-45'} transition-transform`} onClick={toggleColor}>
        <AiOutlinePlus color='white' size='20'/>
      </div>

      {
        displayColor && 
        <div className='flex flex-col items-center gap-4'>
          <ColorSelect color='bg-yellow-500'/>
          <ColorSelect color='bg-rose-400'/>
          <ColorSelect color='bg-fuchsia-400'/>
          <ColorSelect color='bg-cyan-300'/>
          <ColorSelect color='bg-lime-300'/>
      </div>
      }
    </div>
  )
}
