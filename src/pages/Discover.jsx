import { useDispatch, useSelector } from 'react-redux';

import {
  Error,
  Loader,
  MusicPlayer,
  SongCard,
  TopPlay,
  Footer,
  Playlist,
  NewSong,
  ListMV,
} from '../components';
import { genres, playlists } from '../assets/constants';

import { useGetTopChartsQuery } from '../redux/services/ShazamCore';
import Slider from '../components/Slider';

const Discover = () => {
  // const dispatch = useDispatch();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const { data, isFetching, error } = useGetTopChartsQuery();
  // console.log(data);

  // if (isFetching) {
  //   return <Loader title="Loading songs..." />;
  // }
  // if (error) {
  //   return <Error />;
  // }
  
  
    return (
    <div className="bg-[#1d375a] dark:bg-white/95">
      {/* content */}
      <div className="flex flex-row relative">
        {/* scroll */}
        <div className="flex flex-col p-2 w-full md:w-[80%] ">
          {/* slider  */}
          <Slider className="bg-black" />

          {/* playlist  */}
          <div className="w-full text-white dark:text-black px-4 py-4 ">
            {playlists.map((playlist, i) => (
              <Playlist key={i} playlist={playlist} />
            ))}
          </div>
          {/* new song */}
          <div className="w-full px-4 py-8">
            <NewSong />
          </div>
          {/* hot mv */}
          <div className="w-full px-4 py-8 ">
            <ListMV />
          </div>
        </div>

        {/*pin:  top play */}
        <div className="hidden md:block md:sticky top-2 right-[10px] md:max-w-[25%] h-fit ">
          <TopPlay />
        </div>
      </div>

      {/* footer  */}
      <div className="bg-slate-500 w-full">
        <Footer />
      </div>
    </div>
  );}
;
export default Discover;
