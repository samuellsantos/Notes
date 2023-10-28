import { useState } from 'react'
import { OptionsButton } from './OptionsButton'
import { removeNote } from '../redux/saveNoteSlice'
import { useDispatch } from 'react-redux'
import { motion, AnimatePresence } from 'framer-motion'

export const Note = ({color, children, id}: any ) => {
  const [openOptions, setOpenOptions] = useState(false)
  const dispatch = useDispatch()

  const handleOpenOptions = () => {
    setOpenOptions(!openOptions)
  }

  const handleRemoveNote = () => {
    dispatch(removeNote(id))
    console.log(id)
  }
  
  return (
   <div className='relative transition-all'>
      <div  className={`${color} rounded p-4 max-w-2xl h-auto flex items-center z-20`}>
        <p className='max-w-xs break-words'>
          {children}
        </p>
        <div onClick={handleOpenOptions} className='
        self-end'>
           <OptionsButton />
        </div>

    {/* OPTIONS */}
  <AnimatePresence>
    {openOptions && 
      <div className='absolute -right-24 top-0 z-50'>
          <div className='flex flex-col items-start gap-y-2'>
          <motion.button 
          onClick={handleRemoveNote}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }} className='p-1 bg-black text-white rounded-sm cursor-pointer w-20'>Delete
          </motion.button >

          <motion.button 
            custom={1} 
            animate={{ opacity: 1, y: 0 }} 
            initial={{ opacity: 0, y: -20 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.1, delay: 0.1 }} 
            className='p-1 bg-black text-white rounded-sm cursor-pointer w-20'>Edit</motion.button >

            <motion.button 
            onClick={handleOpenOptions}
            custom={2} 
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.1, delay: 0.2 }} 
            className='p-1 bg-black text-white rounded-sm cursor-pointer w-20'>Cancel</motion.button >
          </div>
        </div>
      }
    </AnimatePresence>
      </div>
   </div>
  )
}
