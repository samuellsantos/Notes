import {FiTrash2} from 'react-icons/fi'
export const TrashBtn = () => {
  return (
    <div className='bg-black rounded-full p-3 cursor-pointer transition-all hover:opacity-70'>
      <FiTrash2 size={25} color='white'/>
    </div>
  )
}
