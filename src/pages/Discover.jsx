import { useDispatch, useSelector } from "react-redux";

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
} from "../components";
import { genres, playlists } from "../assets/constants";

import { useGetTopChartsQuery } from "../redux/services/ShazamCore";
import Slider from "../components/Slider";

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);

  if (isFetching) {
    return <Loader title="Loading songs..." />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="bg-[#1d375a]">
      {/* content */}
      <div className="flex flex-row relative">
        <div className="flex flex-col p-2 w-[80%] ">
          {/* slider  */}
          <Slider className="bg-black" />

          {/* playlist  */}
          <div className="w-full text-white px-4 py-4 ">
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
            <ListMV/>
          </div>
          {/* genres  */}
          <div className="flex items-center gap-4 px-4 py-2">
            <p className="text-sm ">Discover </p>
            <select
              className="text-gray-700 block px-4 py-2 text-sm"
              onChange={() => {}}
              value=""
            >
              {genres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.title}
                </option>
              ))}
            </select>
          </div>

          {/* songs  */}
          <div className="flex flex-wrap sm:justify-start justify-center gap-8 ">
            {data?.map((song, i) => (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            ))}
          </div>
        </div>

        {/* top play */}
        <div className=" md:sticky top-2 right-[10px] md:max-w-[25%] h-fit ">
          <TopPlay />
        </div>
      </div>

      {/* footer  */}
      <div className="bg-slate-500 w-full">
        <Footer />
      </div>
    </div>
  );
};
export default Discover;
