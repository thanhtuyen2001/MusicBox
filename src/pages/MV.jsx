import React from 'react'

import { ListMV } from '../components'
import MVCard from '../components/ListMV/MVCard'
const MV = () => {
  return (
    <div className='flex  gap-4 p-8'>
      {/* main vid */}
      <div>
        {/* mv */}
        <div>
        <iframe width="900" height="435" src="https://www.youtube-nocookie.com/embed/oZ2hR-Jjsnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        {/* info */}
        <div className='flex flex-col gap-2 p-4'>
            {/* mv name , singer*/}
            <div className='text-3xl'>Viva la Vida</div>
            <div className='text-lg text-slate-300'>Coldplay </div>
            <div className='bg-[#344b6b] dark:bg-slate-200  p-4 rounded-lg'>
            "Viva la Vida" is a song by British rock band Coldplay. It was written by all members of the band for their fourth album, Viva la Vida or Death and All His Friends (2008). The lyrics to the song contain historical and Christian references, and the track is built around a looping string section in unison with a digitally processed piano, with other layers gradually being added as the song builds.
            </div>
        </div>
      </div>
      {/* recommend */}
      <div className='flex flex-col gap-6'>
        <div className='text-lg font-Roboto italic border-b '>Recommend for you</div>
        <MVCard/>
        <MVCard/>
        <MVCard/>
        <MVCard/>
      </div>
    </div>
  )
}

export default MV
