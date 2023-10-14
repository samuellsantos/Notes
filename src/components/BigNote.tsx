import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const BigNote = () => {
  const color = useSelector((state: RootState) => state.app.color)
  const BigNote = useSelector((state: RootState) => state.app.BigNote)
  return (
    <>
      {BigNote && <div className='flex items-center justify-center shadow-md'>
      <textarea name="note" id="note" cols="40" rows="7" maxLength={100} placeholder='Type your note here!' 
      className={`${color} border-none focus:outline-none p-4 text-black resize-none rounded overflow-hidden placeholder:text-slate-800 placeholder:italic`}>

      </textarea>
    </div>}
    </>
  )
}
