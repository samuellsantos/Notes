  import React, { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { RootState } from '../redux/store'
  import { motion } from 'framer-motion'

  import {AiOutlineCheckCircle} from 'react-icons/ai'
  import {AiOutlineCloseCircle} from 'react-icons/ai'

  import { closeBigNote } from '../redux/userSlice'


  export const BigNote = () => {
    const color = useSelector((state: RootState) => state.app.color)
    const BigNote = useSelector((state: RootState) => state.app.BigNote)

    const [text, setText] = useState('')
    const maxLines = 4;

    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const lines = event.target.value.split('\n');
      if (lines.length <= maxLines) {
        setText(event.target.value);
      }
    };

    const dispatch = useDispatch()

    function closeNote (){
      dispatch(closeBigNote())
      setText('')
    }

    function closeNotePressEsc(e: React.KeyboardEvent<HTMLTextAreaElement>) {
      if(e.key === 'Escape') {
        dispatch(closeBigNote())
        setText('')
      }
    }
    return (
      <>
        {BigNote && <motion.div 
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: '0%', opacity: 1 }}
        transition={{ duration: .5 }}
        className='flex items-center flex-col justify-center shadow-md'>
        <textarea name="note"
        id="note" 
        cols="40"
        rows="5"
        maxLength={100}
        placeholder='Type your note here!' 
        value={text}
        onChange={handleTextareaChange}
        onKeyDown={closeNotePressEsc}
        className={`${color} border-none focus:outline-none p-4 text-black resize-none rounded-t  overflow-hidden placeholder:text-black/20 placeholder:italic transition-all`}>

        </textarea>
        {/* <input type="text" name="note" id="note" maxLength={100} placeholder='Type your note here!' className={`${color} border-none focus:outline-none p-4 text-black resize-none rounded overflow-hidden placeholder:text-black/20 placeholder:italic transition-all w-auto`}/> */}
        <div className={`${color} w-full h-16 rounded-b flex items-center justify-between p-4`}>
          <motion.div className='cursor-pointer' 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => closeNote()}
          >
          <AiOutlineCloseCircle size={40}/>
          </motion.div>

          <div>
            <p className='font-bold transition-all pointer-events-none'>
              {text.length}/100
            </p>
          </div>

          <motion.div className='cursor-pointer'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}>
          <AiOutlineCheckCircle size={40}/>
          </motion.div>
        </div>
      </motion.div>}
      </>
    )
  }
