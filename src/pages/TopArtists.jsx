/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsFillCaretUpFill, BsFillCaretDownFill } from 'react-icons/bs';
import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { songCover } from '../assets';
import { Footer } from '../components';

const names = [
  'Justine Bieber',
  'Lady Gaga',
  'Katy Perry',
  'Rihanna',
  'Taylor Swift',
  'Justine Bieber',
  'Lady Gaga',
  'Katy Perry',
  'Rihanna',
  'Taylor Swift',
];
const tag1 = (
  <div className=" text-[12px] font-bold font-Roboto text-yellow-500">New</div>
);
const tag2 = (
  <div className="flex gap-1 text-[12px] font-bold font-Roboto text-green-500">
    <BsFillCaretUpFill /> {Math.floor(Math.random() * 10)}
  </div>
);
const tag3 = (
  <div className="flex gap-1 text-[12px] font-bold font-Roboto text-red-500">
    <BsFillCaretDownFill /> {Math.floor(Math.random() * 10)}
  </div>
);
const tag4 = (<div className=" text-[14px] font-bold font-Roboto"> - </div>);
const tags = [tag1, tag2, tag3, tag4];

const TopArtists = () => {
  const { data } = useGetTopChartsQuery();
  const topArtists = data?.slice(0, 10);
  console.log('top artists', topArtists);

  return (
    <div>
      <div className="">
        <div className="px:8 md:px-12 py-8 bg-[#344b6b] dark:bg-[#FFCEF3]">
          {/* title */}
          <div className="flex gap-2 items-center font-AndikaTitle text-4xl my-4">
            Trending Artists
          </div>
          {/* rank */}
          <div className="flex gap-12  ">
            {/* img */}
            <div className="w-80 hidden md:block">
              <img
                src={
                  data[0]?.images?.background
                    ? data[0]?.images?.background
                    : songCover
                }
                alt="Artist Image"
                className=" rounded-md"
              />
            </div>
            {/* number */}
            <div className="flex flex-col gap-4 flex-wrap h-80 content-start justify-start md:mr-4 ">
              {names.map((artist, i) => (
                <div className="flex gap-3 h-12 md:w-80  p-2  mx-16 items-center justify-start hover:bg-[#234069] dark:hover:bg-[#FFE2E2] rounded-md">
                  <div className="text-[#9faabc] text-lg font-Roboto dark:text-black font-bold">{i + 1}</div>

                  {tags[Math.floor(Math.random() * 4)]}

                  <div
                    className="font-bold"
                  >{artist}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* artists */}
        <div className="m-12">
          <div className="flex gap-2 items-center font-AndikaTitle text-4xl mt-12 mb-4 ">
            Artists
          </div>
          <div className="flex flex-wrap gap-4 justify-around">
            {data?.map((artist, i) => (
              <div key={i}>
                <img
                  src={
                    artist?.images?.background
                      ? artist?.images?.background
                      : songCover
                  }
                  alt="artist image"
                  className="md:w-60 w-40 rounded-full shadow-3xl "
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-slate-500 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default TopArtists;
