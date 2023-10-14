import React from 'react'

export const BigNote = () => {
  return (
    <div className='flex items-center justify-center'>
      <textarea name="note" id="note" cols="40" rows="2" maxLength={100} 
      className='bg-fuchsia-400 border-none focus:outline-none p-4 text-black resize-none rounded'>

      </textarea>
    </div>
  )
}
