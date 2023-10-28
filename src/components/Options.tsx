import { motion, AnimatePresence } from 'framer-motion'

export const Options = () => {
  return (
    <AnimatePresence>
      <div className='flex flex-col items-start gap-y-2'>
      <motion.button 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }} className='p-1 bg-slate-300 rounded-sm cursor-pointer w-20'>Delete
      </motion.button >

      <motion.button 
        custom={1} 
        animate={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: -20 }} 
        exit={{ opacity: 0, y: -20 }} 
        transition={{ duration: 0.1, delay: 0.1 }} 
        className='p-1 bg-slate-300 rounded-sm cursor-pointer w-20'>Edit</motion.button >

      <motion.button 
      custom={2} 
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }} 
      exit={{ opacity: 0, y: -20 }} 
      transition={{ duration: 0.1, delay: 0.2 }} 
      className='p-1 bg-slate-300 rounded-sm cursor-pointer w-20'>Cancel</motion.button >
    </div>
    </AnimatePresence>
  )
}
