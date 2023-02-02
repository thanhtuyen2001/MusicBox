import React from 'react'

import { BsFillPlayCircleFill } from 'react-icons/bs';

const favouriteAlbums = [{
    title: "Renaissance",
    desc: " Your weekly update of the most played tracks right now - Global.",
    src: 'https://images.unsplash.com/photo-1570977994637-077d2ce477c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGdsb2JhbHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60'
},
{
    title: "Un Verano Sin Ti",
    desc: " Your daily update of the most played tracks right now - India",
    src: 'https://images.unsplash.com/photo-1652126176790-63d816be1d51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmlyYWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
},
{
    title: "Mr. Morale & the Big Steppers",
    desc: " Your daily update of the most played tracks right now - India",
    src: 'https://images.unsplash.com/photo-1496208612508-eb52fba7d94e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljJTIwY2hhcnR8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
},
];

const FavouriteAlbum = () => {
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
                            <div>
                                <div
                                    className="text-lg font-medium mt-1 w-[90%] inline-block truncate  cursor-pointer hover:text-sky-400"
                                >
                                    {album.title}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FavouriteAlbum;