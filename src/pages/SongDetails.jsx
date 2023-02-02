import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetSongDetailsQuery } from "../redux/services/ShazamCore";
import { setActiveSong, playPause } from "../redux/features/playerSlice";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isfetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  console.log("song data ddau :< ", songData);
  console.log("songid:< ", songid);

  return (
    <div className=" pageTheme flex p-8 h-screen  justify-around relative">
      {/* info */}
      <div className="sticky top-8 text-white  text-center max-w-[30%] h-fit text-xl">
        <DetailsHeader
          artistId=""
          songData={songData}
          customeStyle="rounded-2xl w-72"
          className="w-72"
        />
        <div className="font-AndikaTitle text-2xl text-white dark:text-black m-2 ">
          {" "}
          {songData?.title}
        </div>
        <div className="text-[#8792a2]">
          <div>
            <span className="italic"> Singers:</span> {songData?.artists?.map((item, i) => `${item.alias} ${ (i+1) < songData.artists.length ? ', ' : '' } `)}
          </div>
          <div className="m-1"> <span className="italic">Genres:</span> {songData?.genres?.primary}</div>
          <div className="m-1"> <span className="italic">Release Date:</span> {songData?.releasedate}</div>
        </div>
      </div>

      {/* lyrics */}
      <div className="m-1 sticky top-9  w-[60%] overflow-hidden h-[73%]">
        <h2 className="text-white text-2xl mb-2">lyrics:</h2>
        <div
          className="px-6 py-10  text-xl text-[#b4c2d8] dark:text-slate-700 h-96 bg-[#344b6b] dark:bg-slate-300 font-bold rounded-lg w-full
          overflow-y-scroll scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-slate-400  scrollbar-thumb-rounded-full scrollbar-track-rounded-full "
        >
          <div className="text-center">
            {songData?.sections[1].type === "LYRICS" ? (
              songData?.sections[1].text.map((line, i) => (
                <p key={i}> {line}</p>
              ))
            ) : (
              <p>sorry, no lyrics found!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
