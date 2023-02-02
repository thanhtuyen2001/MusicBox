import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { BsMusicNote, BsThreeDotsVertical, BsFillHeartFill } from 'react-icons/bs';
import { songCover } from '../assets';
import { FavouriteAlbum } from '../components';

const ArtistDetails = () => {

  const { data } = useGetTopChartsQuery();

  const songsData = data.slice(0, 6);

  return (

    <div>
      {/* banner  */}
      <div className="relative w-full h-72 ">
        <div className="h-72 bg-red-500 bg-no-repeat  opacity-75 bg-opacity-60">
          <img src="https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2VyfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""
            className="h-72 mx-auto opacity-95"
          />
        </div>
        <div className="absolute  bg-black/25 top-[30%] left-12 shadow-2xl p-4">
          <div className=" text-7xl text-white">Rangon</div>
          <div className="flex mt-12 gap-8 text-lg">
            <div className=""> 123.987 follower</div>
            <button className="border px-4 py-[2px] rounded-3xl">FOLLOWED</button>
          </div>
        </div>
      </div>
      {/* popular songs  */}
      <div>
        <div className='flex justify-between'>
          <div>Popular Songs</div>
          <dir>See all</dir>
        </div>
        <div className="grid grid-cols-2 gap-1 gap-y-0">
          {songsData.map((song, i) => {
            return (<div key={i} className="flex items-center justify-between gap-4 hover:bg-[#344b6b] p-2 rounded-md">
              <div className="flex justify-center items-center gap-2 ">

                <div className="max-w-[50px] max-h-[50px] rounded-lg overflow-hidden ml-2">
                  <img
                    src={
                      song?.images?.coverart ? song?.images?.coverart : songCover
                    }
                    alt=""
                  />
                </div>

                <div className="ml-4">
                  <p className="text-white text-xl font-semibold ">{song.title}</p>
                  <div className="text-[#8792a2]">{song.subtitle}</div>
                </div>
              </div>

              <div className="group flex gap-4 items-center">
                <BsFillHeartFill />
                <div>04:12</div>
                <BsThreeDotsVertical />
              </div>
            </div>)
          })}
        </div>
      </div>
      {/* single & ep  */}
      <div>
      <div className='flex justify-between'>
          <div>single & ep </div>
          <dir>See all</dir>
        </div>
        <div>

          <FavouriteAlbum />
        </div>
      </div>
      {/* album  */}
      <div>
      <div className='flex justify-between'>
          <div>album </div>
          <dir>See all</dir>
        </div>
        <div>

          <FavouriteAlbum />
        </div>
      </div>
      {/* mv  */}
      <div>
      <div className='flex justify-between'>
          <div>mv</div>
          <dir>See all</dir>
        </div>
        <div>

          <FavouriteAlbum />
        </div>
      </div>
      {/* album  */}
      <div>
      <div className='flex justify-between'>
          <div>album </div>
          <dir>See all</dir>
        </div>
        <div>

          <FavouriteAlbum />
        </div>
      </div>
      {/* about singer  */}
      <div>
        <div>About Rangon</div>
        <div>
          {/* img  */}
          <div>

          </div>
          {/* info : bio + follower */}
        </div>
      </div>
    </div>
  )
};

export default ArtistDetails;
