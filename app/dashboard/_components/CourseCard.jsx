// // 
// import React from 'react'
// import { HiMiniEllipsisVertical, HiOutlineBookOpen } from 'react-icons/hi2'

// import DropdownOption from './DropdownOption'
// import { db } from '@/configs/db'
// import { CourseList } from '@/configs/schema'
// import { eq } from 'drizzle-orm'
// import Link from 'next/link'


// function CourseCard({course,refreshData}) {


//   const handleDelete=async()=>{
//     const resp=await db.delete(CourseList)
//     .where(eq(CourseList.courseId,course?.courseId))
//     .returning({id:CourseList?.courseId});

//     if(resp){
//       refreshData();


//   }
// }



//   return (
//     <div className='p-2 sm:p-3 md:p-4'>
//       <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer 
//         transform hover:-translate-y-1 w-full'>
//         <Link href={'/course/'+course?.courseId}>
//         <img 
//           src={course?.courseBanner} 
//           alt="course" 
//           className='w-full h-[120px] sm:h-[150px] md:h-[180px] object-cover rounded-t-xl'
//         />
//         </Link>
//         <div className='p-3 sm:p-4'>
//           <h1 className='text-base sm:text-lg md:text-xl font-medium line-clamp-2 flex justify-between items-center'>
//             {course?.courseOutput?.courseName}<DropdownOption handleDelete={()=>handleDelete()}><HiMiniEllipsisVertical/></DropdownOption>
//           </h1>
          
//           <p className='text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2'>
//             {course?.category}
//           </p>
//           <div className='flex flex-wrap gap-2 sm:gap-4 items-center justify-between mt-2 sm:mt-3'>
//             <p className='text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 
//               text-primary bg-slate-100 px-2 py-1 rounded-full'>
//               <HiOutlineBookOpen className='w-4 h-4'/> 
//               <span>{course?.courseOutput?.noOfChapters} Chapters</span>
//             </p>
//             <p className='text-xs sm:text-sm font-medium text-primary bg-slate-100 
//               px-2 py-1 rounded-full'>
//               {course?.difficulty}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseCard



import React from 'react'
import { HiMiniEllipsisVertical, HiOutlineBookOpen } from 'react-icons/hi2'
import DropdownOption from './DropdownOption'
import { db } from '@/configs/db'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import Link from 'next/link'

function CourseCard({ course, refreshData }) {

  const handleDelete = async () => {
    const resp = await db.delete(CourseList)
      .where(eq(CourseList.courseId, course?.courseId))
      .returning({ id: CourseList?.courseId });

    if (resp) {
      refreshData();
    }
  }

  return (
    <div className='p-2 sm:p-3 md:p-4 flex justify-center'>
      <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer 
        transform hover:-translate-y-1 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] 
        h-[350px] sm:h-[400px] md:h-[450px] lg:h-[400px] overflow-hidden flex flex-col'>

        <Link href={'/course/' + course?.courseId}>
          <img 
            src={course?.courseBanner} 
            alt="course" 
            className='w-full h-[120px] sm:h-[150px] md:h-[180px] object-cover rounded-t-xl'
          />
        </Link>

        <div className='p-3 sm:p-4 flex-1 flex flex-col justify-between'>
          <h1 className='text-base sm:text-lg md:text-xl font-medium line-clamp-2 flex justify-between items-center'>
            {course?.courseOutput?.courseName}
            <DropdownOption handleDelete={() => handleDelete()}>
              <HiMiniEllipsisVertical />
            </DropdownOption>
          </h1>

          <p className='text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2'>
            {course?.category}
          </p>

          <div className='flex flex-wrap gap-2 sm:gap-4 items-center justify-between mt-2 sm:mt-3'>
            <p className='text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2 
              text-primary bg-slate-100 px-2 py-1 rounded-full'>
              <HiOutlineBookOpen className='w-4 h-4' /> 
              <span>{course?.courseOutput?.noOfChapters} Chapters</span>
            </p>
            <p className='text-xs sm:text-sm font-medium text-primary bg-slate-100 
              px-2 py-1 rounded-full'>
              {course?.difficulty}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CourseCard

