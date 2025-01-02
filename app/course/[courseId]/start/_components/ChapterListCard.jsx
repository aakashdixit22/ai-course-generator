import React from 'react'
import { HiOutlineClock } from 'react-icons/hi2'

function ChapterListCard({chapter,index}) {
  return (
    <div className='grid grid-cols-5 p-3 items-center border-b '>
        <div>
            <h2 className='p-1 bg-primary w-8 h-8 text-white rounded-full text-center'>{index+1}</h2>

        </div>
        <div className='col-span-4 '>
            <h2 className='font-medium text-lg'>{chapter?.chapterName}</h2>
            <p className='flex items-center gap-2 text-primary '><HiOutlineClock/>{chapter?.duration}</p>
        </div>
    </div>
  )
}

export default ChapterListCard