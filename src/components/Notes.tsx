import { useState } from 'react'
import { BigNote } from './BigNote'
import { Note } from './Note'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { removeNote } from '../redux/saveNoteSlice'

export const Notes = () => {
  const notesFromRedux = useSelector((state: RootState) => state.save)
  const [delNote, setDelNote] = useState(false)

  const dispatch = useDispatch()

  function noteID(id: number) {
    if(delNote) {
      const saveID = id
      dispatch(removeNote(saveID))
      setDelNote(false)
    }
  }

  return (
    <div className='w-full h-full relative'>
      <header className='flex items-center justify-between'>
        <div>
          <h1 className='text-3xl mb-4'>
            Notes
          </h1>
        </div>

      </header>

      <div className='flex flex-wrap gap-3'>
      {notesFromRedux.length > 0 ? notesFromRedux.map((note: any) => (
          <Note color={note.color} key={note.id} id={note.id} onClick={() => noteID(note.id)}>{note.note}</Note>
      ))
      : <div>
          <h1>
            You don't have Notes now! 
          </h1>
        </div>}
       
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <BigNote />
      </div>
    </div>
  )
}
