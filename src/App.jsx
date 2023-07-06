import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer } from './components';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex h-full  mx-auto">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full">
        <Searchbar />
        <div className="h-[calc(100vh-56px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-28">
            <Outlet />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="music-player w-full ">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
