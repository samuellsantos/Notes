import { SideMenu } from './SideMenu'
import { Notes } from './Notes'

export const NotesAPP = () => {
  return (
    <div className='font-poppins w-full h-screen flex p-8 gap-12'>
      <SideMenu />
      <Notes />
    </div>
  )
}
