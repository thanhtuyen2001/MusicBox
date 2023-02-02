import React from 'react'
import { BsFillPlayCircleFill } from 'react-icons/bs';

const favouriteAlbums = [
    {
        title: "Sad hour",
        desc: " Lose yourself to hours of acoustic goodness.",
        src:'https://images.unsplash.com/photo-1510897345173-4d938815feb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: "Love 2000",
        desc: " Lose yourself to hours of acoustic goodness.",
        src: 'https://images.unsplash.com/photo-1615534015940-347d481f9068?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9vZHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
      },
      {
        title: "Good day",
        desc: " Lose yourself to hours of acoustic goodness.",
        src: 'https://images.unsplash.com/photo-1585577490058-9d5ef42c842d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vb2R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
      },
];

const SingerAlbum = () => {
  return (
    <div className='flex gap-8 m-4'>
    {
        favouriteAlbums.map((album, i) => {
            return (
                <div key={i}>
                    {/* img */}
                    <div className="rounded-md overflow-hidden group relative ">
                        <div className='max-h-[250px] max-w-[250px]'>
                            <img
                                src={album.src}
                                alt="album"
                                className="group-hover:scale-125 group-hover:opacity-70 transition-all"
                            />
                        </div>
                        <BsFillPlayCircleFill className="hidden group-hover:inline-block transition-all absolute top-2/4 left-2/4 translate-x-[-50%] shadow-lg shadow-cyan-200 rounded-full  translate-y-[-50%] self-center text-4xl  " />
                    </div>
                    {/* title */}
                    <div className='flex flex-col'>
                        <div
                            className="text-lg font-medium mt-1 w-[90%] inline-block truncate  cursor-pointer hover:text-sky-400"
                        >
                            {album.title}
                        </div>
                        <div className='text-white/75'> 2022 </div>
                    </div>
                </div>
            )
        })
    }
</div>
  )
}

export default SingerAlbum;