import React from 'react'
import { BigNote } from './BigNote'

export const Notes = () => {
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <BigNote />
      </div>
    </div>
  )
}
