import React, { useState } from 'react'
import { OptionsButton } from './OptionsButton'
import { Options } from './Options'

export const Note = ({color, children}: any ) => {
  const [openOptions, setOpenOptions] = useState(false)

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions)
  }
  
  return (
   <div className='relative'>
      <div  className={`${color} rounded p-4 min-w- max-w-4xl h-auto flex items-center`}>
        <p className='max-w-md break-words'>
          {children}
        </p>
        <div onClick={handleOpenOptions}>
           <OptionsButton />
        </div>

        {/* OPTIONS */}
        {openOptions && 
          <div className='absolute -right-24 top-0'>
           <Options />
          </div>
        }
      </div>
   </div>
  )
}
