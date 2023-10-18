import React from 'react'

export const Note = ({color, children}: any ) => {
  
  return (
   <div>
      <div  className={`${color} rounded p-4 flex items-center justify-center`}>
      <p className='max-w-md break-words'>
        {children}
      </p>
      </div>
   </div>
  )
}
