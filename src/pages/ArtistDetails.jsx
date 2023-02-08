import { useGetTopChartsQuery } from '../redux/services/ShazamCore';

import { BsMusicNote, BsThreeDotsVertical, BsFillHeartFill, BsChevronRight } from 'react-icons/bs';
import { songCover } from '../assets';
import { FavouriteAlbum , SingerAlbum} from '../components';
import MVCard from '../components/ListMV/MVCard';

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
        <div className="absolute bg-black/25 top-[30%] left-12 shadow-2xl p-4">
          <div className=" text-7xl text-white">Rangon</div>
          <div className="flex mt-12 gap-8 text-lg">
            <div className="dark:text-white"> 123.987 follower</div>
            <button className="border px-4 py-[2px] dark:text-white rounded-3xl">FOLLOWED</button>
          </div>
        </div>
      </div>
      {/* content  */}
      <div className='pt-8 px-14 '>
        {/* popular songs  */}
        <div>
          <div className='flex justify-between  items-center  mt-12'>
            <div className='text-2xl font-bold font-Roboto'>Popular Songs</div>
            <dir className="text-white/70 flex items-center justify-center " >See all <BsChevronRight size="20px" /> </dir>
          </div>
          <div className="grid grid-cols-2 gap-1 gap-y-0">
            {songsData.map((song, i) => {
              return (<div key={i} className="flex items-center justify-between gap-4 hover:bg-[#344b6b] dark:hover:bg-slate-200 p-2 rounded-md">
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
                    <p className="text-white dark:text-black text-xl font-semibold line-clamp-2">{song.title}</p>
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
          <div className='flex items-center justify-between mt-12'>
            <div className={headerStyle}>Single & EP </div>
            <dir className="text-white/70 flex items-center justify-center" >See all <BsChevronRight size="20px" /> </dir>

          </div>
          <div>

            <FavouriteAlbum />
          </div>
        </div>
        {/* album  */}
        <div>
          <div className='flex justify-between  items-center  mt-12'>
            <div className={headerStyle}>Album </div>
            <dir className="text-white/70 flex items-center justify-center" >See all <BsChevronRight size="20px" /> </dir>

          </div>
          <div>

            <SingerAlbum />
          </div>
        </div>
        {/* mv  */}
        <div>
          <div className='flex justify-between  items-center  mt-12'>
            <div className={headerStyle}>Mv</div>
            <dir className="text-white/70 flex items-center justify-center" >See all <BsChevronRight size="20px" /> </dir>
          </div>
          <div className='flex gap-8'>

            <MVCard />
            <MVCard />
            <MVCard />
          </div>
        </div>

        {/* about singer  */}
        <div className=' mt-12'>
          <div className={headerStyle }>About Rangon</div>
          <div className='flex gap-4 mt-8'>
            {/* img  */}
            <div className='w-[40%] '>
              <div className="  overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599467556385-48b57868f038?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHNpbmdlcnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60" alt="" srcset=""
                  className=" rounded-lg overflow-hidden"
                />
              </div>
            </div>
            {/* info : bio + follower */}
            <div className='w-[60%] h-96 overflow-hidden'>
              <div className='w-full h-[38%] overflow-ellipsis overflow-clip  text-white/60 dark:text-slate-800'>
                 <p className=' text-ellipsis'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet tenetur, praesentium vel deleniti dolor sunt placeat quo quaerat, tempore reiciendis unde numquam soluta aliquam ab.
                  <br /> Reprehenderit officia exercitationem quas nobis. Modi dignissimos esse dolorem eius voluptatem tenetur distinctio, libero facilis, delectus aut porro velit, quaerat natus adipisci odit. Reprehenderit vel atque, iure veniam consequuntur, praesentium quas recusandae repellendus illo inventore est omnis illum nostrum ex amet explicabo mollitia. Sunt quam dolorum doloremque optio sapiente deserunt impedit assumenda temporibus provident. Veniam et debitis repudiandae sapiente, molestias placeat quo eligendi pariatur officia quas minima facere atque aut voluptatum. Corporis praesentium, officiis, laborum architecto ipsam fugiat similique et odio rerum beatae ipsum id harum dolorem quae. Aperiam rerum reprehenderit rem labore tempora eius consequuntur dolore, ex recusandae dolores nisi molestias perspiciatis vero voluptatem est tempore nemo! Illum mollitia sed deserunt consectetur perferendis iusto consequatur. Corporis optio voluptates praesentium. Animi mollitia consequatur vel officia sint similique sunt in corrupti neque? Non culpa eaque reprehenderit, suscipit vitae, iste nulla aspernatur tempore sint consequuntur sed, quod asperiores? Hic inventore incidunt beatae, perspiciatis eveniet veritatis quisquam ullam nulla quibusdam vero fuga magni nihil aliquam iste velit asperiores et eius delectus adipisci ab error expedita doloribus maxime labore? Ipsam recusandae vero natus harum blanditiis. Eaque sapiente doloremque dolores optio eos alias consequatur sed error in obcaecati ex, neque aliquam odit impedit veritatis vitae eum magni, dolorum dolor, maiores accusantium autem! Eos facilis possimus ab doloribus voluptates, suscipit, beatae aliquid labore et soluta quia excepturi fuga! Obcaecati ducimus, quaerat impedit animi provident incidunt atque quod dolor natus doloremque fugiat, magni cum ut. Nesciunt aliquid sint ea sunt esse labore, perspiciatis illum consequuntur quis, ab autem mollitia veritatis cum illo quisquam iusto minima nemo molestias quos impedit voluptatibus facere est veniam. Officia delectus a velit doloremque corporis nam excepturi laboriosam ex harum, ipsam, exercitationem modi quisquam iure! Commodi ea debitis ipsam maiores adipisci nam alias sequi vitae amet dolor quasi quod, assumenda iure, quaerat quis excepturi nemo corporis doloribus provident vel a voluptas quisquam. Placeat, voluptate eligendi. Dolor ad cumque quo commodi, deleniti soluta est perferendis! Ea exercitationem, dolorem itaque distinctio molestiae recusandae aut nemo quidem harum dolores eius? Necessitatibus, quae ipsam vel commodi officia quasi cumque repudiandae sequi voluptas quibusdam animi, velit tempora facere. Tempora, molestiae suscipit! Iure debitis eius deleniti! Laudantium beatae modi eaque iste error corrupti, sit facilis suscipit nesciunt, inventore consectetur, reprehenderit provident nihil ex rerum aperiam repudiandae. Impedit ut voluptate, unde aut itaque aspernatur possimus quo, voluptatibus nulla, molestiae adipisci molestias modi? Praesentium eaque voluptate, quidem voluptates beatae veniam minus eius sunt quam repellendus. Laboriosam dicta inventore minima laudantium maxime consequatur qui, libero rem beatae laborum neque odit reprehenderit recusandae dolore alias aliquam sed? Inventore nihil, ipsa earum velit nemo omnis recusandae veritatis eius eligendi a unde eveniet doloribus ab at accusantium. Commodi hic nihil quibusdam ducimus et ipsum, perferendis sint facere iste minima? Sed non magni minima enim quia, dolores quibusdam repellat in dolorem aut facere odit commodi accusamus necessitatibus repudiandae id saepe et.
                  </p>
              </div>
                <div className="cursor-pointer dark:text-black dark:font-bold"> ... See more</div>
                <div className='flex flex-col py-6 gap-2'>
                  <div className='font-Roboto font-bold text-2xl'>123.987 </div>
                  <div>Follower</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ArtistDetails;

const headerStyle = "text-2xl font-bold font-Roboto";