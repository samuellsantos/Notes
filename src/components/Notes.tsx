import React from 'react'
import { BigNote } from './BigNote'
import { Note } from './Note'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export const Notes = () => {
  const notesFromRedux = useSelector((state: RootState) => state.save)
  console.log(notesFromRedux)
  return (
    <div className='w-full h-full relative'>
      <header>
        <h1 className='text-3xl mb-4'>
          Notes
        </h1>
      </header>

      <div className='flex flex-wrap gap-3'>
      {notesFromRedux && notesFromRedux.map((note: any) => (
          <Note color={note.color}>{note.note}</Note>
      ))}
       
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <BigNote />
      </div>
    </div>
  )
}
