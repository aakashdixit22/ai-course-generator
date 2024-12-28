import CateogryList from '@/app/_shared/CateogryList';
import Image from 'next/image';
import React from 'react'
import { useContext } from 'react';
import { UserInputContext } from '@/app/_context/UserInputContext';

function SelectCateogry() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleCategoryChange=(category)=>{
    setUserCourseInput((prev)=>({...prev,category:category}))
  }

  return (
    <div className='px-10 md:px-20'>
      <h2 className='my-5 font-semibold'>Select the course Category</h2>
    
    <div className='grid grid-cols-3 gap-10 '>
       
      {CateogryList.map((item) => (
        <div className={`flex flex-col  p-5 border items-center rounded-xl hover:bg-border-primary cursor-pointer hover:bg-blue-200 ${userCourseInput.category==item.name&&'border-primary'}`}
        onClick={()=>handleCategoryChange(item.name)}>
          <Image src={item.icon} width={50} height={50} />
          <h2>{item.name}</h2>
        </div>
      ))}

    </div>
    </div>
  )
}

export default SelectCateogry;