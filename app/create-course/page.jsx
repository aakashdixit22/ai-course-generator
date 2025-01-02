"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  HiMiniArrowDown,
  HiMiniSquares2X2,
  HiLightBulb,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";
import SelectCateogry from "./_components/SelectCateogry";
import TopicDescription from "./_components/TopicDescription";

import SelectOption from "./_components/SelectOption";
import { useContext } from "react";
import { UserInputContext } from "@/app/_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { db } from "@/configs/db";



import { useUser } from "@clerk/nextjs";
import uuid4 from "uuid4";
import { CourseList } from "@/configs/schema";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperCourse = [
    {
      id: 1,
      name: "Category",
      icon: <HiMiniSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic& Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 1,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const[activeIndex,setActiveIndex]=useState(0);//it is used for when we click on next button then it will change the color of stepper
  const[loading,setLoading]=useState(false);
  const {user}=useUser();//it is used to get the user
  const router=useRouter();
  
  useEffect(() => {//basically used when user select any optionor cateogry it wills show that which course yu choose
    console.log(userCourseInput);
  }, [userCourseInput])
  

  const checkStatus=()=>{
    if(userCourseInput?.length==0){
      return true;
    }
    if (activeIndex==0 &&(userCourseInput?.category?.length==0||userCourseInput?.category==undefined)){
      return true;
    }
    if (activeIndex==1 &&(userCourseInput?.topic?.length==0||userCourseInput?.topic==undefined)){
      return true;
    }
    else if (activeIndex==2 &&(userCourseInput?.difficulty==undefined||userCourseInput?.duration==undefined||userCourseInput?.displayVideo==undefined||userCourseInput?.noOfChapter==undefined)){
      return true;
    }
    return false;
    


                                 //used to check status Next button disable or enable 

  }
  const GenerateCourseLayout=async()=>{
    setLoading(true);
    const BASIC_PROMPT="Generate A Course Tutorial on Following Detail With field as Course Name,Description,Along with ChapterName,about,Duration:";
    const USER_INPUT_PROMPT='Category:'+userCourseInput?.category+',Topic:'+userCourseInput?.topic+',Difficulty:'+userCourseInput?.difficulty+',Duration:'+userCourseInput?.duration+',NoOfChapters:'+userCourseInput?.noOfChapter+', in JSON format';
    const FINAL_PROMPT= BASIC_PROMPT + USER_INPUT_PROMPT;
    console.log(FINAL_PROMPT);
    const result=await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    console.log(result.response.text());
    console.log(user);
    console.log(JSON.parse(result.response.text()));
    setLoading(false);                      //generate content for each of chapter
    SaveCourseLayoutinDb(JSON.parse(result.response.text()));

  }
  const SaveCourseLayoutinDb=async(courseLayout)=>{
    var id =uuid4();//it will generate unique id
    setLoading(true);
    const result=await db.insert(CourseList).values({
      courseId:id,
      name:userCourseInput?.topic,
      category:userCourseInput?.category,
      difficulty:userCourseInput?.difficulty,
      courseOutput:courseLayout,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      userName:user?.fullName,
      userProfileImage:user?.imageUrl,

    })
    console.log(result);
    
    setLoading(false);
    router.replace('/create-course/'+id);
  }





  return (
    <div>
      {/*stepper*/}
      <div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-3xl font-bold text-primary">Create Course</h2>
          <div className="flex ">
            {StepperCourse.map((item, index) => (
              <div className="flex items-center mt-5">
                <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                  <div className={`bg-gray-200 p-3 rounded-full text-white
                  ${activeIndex>=index&&"bg-purple-500"}`}>

                    {item.icon}
                  </div>

                  <h2 className="hidden md:block md:text-sm font-semibold">
                    {item.name}
                  </h2>
                </div>
                {index != StepperCourse?.length - 1 && (
                  <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300
                  ${activeIndex-1>=index&&'bg-purple-500'}`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
      {/*component*/}  
      {activeIndex==0?<SelectCateogry/>:
      activeIndex==1?<TopicDescription/>:
      <SelectOption/>}


      {/*footer*/}
      <div className="flex justify-between mt-10">
        <Button disabled={activeIndex==0} className="font-semibold" variant="outline" onClick={()=>setActiveIndex(activeIndex-1)}>Previous</Button>
        {activeIndex<2&&<Button disabled={checkStatus()} className="font-semibold" onClick={()=>setActiveIndex(activeIndex+1)}>Next</Button>}
        {activeIndex==2&&<Button  disabled={checkStatus()} className="font-semibold" onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button>}
      </div>
      </div>
      <LoadingDialog loading={loading}/>

    </div>
  );
}

export default CreateCourse;
