import { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { useDispatch, /* useSelector */ } from 'react-redux'
import { ColorSelect } from './ColorSelect'
import { addBigNote } from '../redux/userSlice'
/* import { RootState } from '../redux/store' */

export const SideMenu = () => {
  const [displayColor, setDisplayColor] = useState(false)
  const dispatch = useDispatch()
/*   const color = useSelector((state: RootState) => state.app.color)
  const noteState = useSelector((state: RootState) => state.app.BigNote) */

  function toggleColor() {
    setDisplayColor(!displayColor)
  }

  function selectedColor (color: string) {
    dispatch(addBigNote(color))
    setDisplayColor(false)
  }

  return (
    <div className='font-poppins font-medium flex flex-col items-center gap-4 border-r-2 border-slate-200 pr-8 min-h-full'>
      <div className='text-2xl font-bold'>
        Brevi
      </div>
      <div className={`bg-black p-4 rounded-full cursor-pointer hover:opacity-70 ${displayColor && 'rotate-x'} transition-transform`} onClick={toggleColor}>
        <AiOutlinePlus color='white' size='20'/>
      </div>

      <AnimatePresence>
        {displayColor && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className='flex flex-col items-center gap-4'
          >
            <motion.div onClick={() => selectedColor('bg-yellow-500')} key='yellow' custom={1} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.1, delay: 0.1 }}  >
              <ColorSelect color='bg-yellow-500' />
            </motion.div>


            <motion.div onClick={() => selectedColor('bg-rose-400')} key='rose' custom={2} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.1, delay: 0.2 }}>
              <ColorSelect color='bg-rose-400' />
            </motion.div>


            <motion.div onClick={() => selectedColor('bg-fuchsia-400')} key='fuchsia' custom={3} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.1, delay: 0.3 }}>
              <ColorSelect color='bg-fuchsia-400' />
            </motion.div>


            <motion.div onClick={() => selectedColor('bg-cyan-300')} key='cyan' custom={4} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.1, delay: 0.4 }}>
              <ColorSelect color='bg-cyan-300' />
            </motion.div>


            <motion.div onClick={() => selectedColor('bg-lime-300')} key='lime' custom={5} animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.1, delay: 0.5 }}>
              <ColorSelect color='bg-lime-300' />
            </motion.div>


          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
