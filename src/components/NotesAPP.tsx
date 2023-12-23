import { SideMenu } from './SideMenu';
import { Notes } from './Notes';

export const NotesAPP = () => {
  return (
    <div className="font-poppins w-full h-auto  flex p-8 gap-12 flex-col sm:flex-row sm:h-screen">
      <SideMenu />
      <Notes />
    </div>
  );
};
