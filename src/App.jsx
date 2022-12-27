import { useSelector } from 'react-redux';
import { Route, Routes, Outlet } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts, Login, MV, Songs, User } from './pages';

import Podcast from './pages/Podcast';
import Signup from './pages/Signup';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

 
  return (
    <div className="relative flex pageTheme">
      <Sidebar />
      
      <div className="flex-1 flex flex-col ">
        <Searchbar />

        <div className=" h-[calc(100vh-56px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-28">
          <Outlet/>
          {/* <Routes>
  <Route path="/discover" element={<Discover />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/podcast" element={<Podcast />} />
  <Route path="/top-artists" element={<TopArtists />} />
  <Route path="/top-charts" element={<TopCharts />} /> */}
  {/* <Route path="/around-you" element={<AroundYou />} /> */}
  {/* <Route path="/around-you" element={<Signup />} />
  <Route path="/artists/:id" element={<ArtistDetails />} />
  <Route path="/songs/:songid" element={<SongDetails />} />
  <Route path="/search/:searchTerm" element={<Search />} />
  <Route path="/mv" element={<MV />} />
  <Route path="/songs" element={<Songs />} />
  <Route path="/user" element={<User />} />
</Routes> */}

          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="music-player">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
