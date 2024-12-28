import React, { use } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const {userCourseInput,setUserCourseInput}=useContext(UserInputContext);
    const handleInputChange=(fieldName,value)=>{
      setUserCourseInput((prev)=>({...prev,[fieldName]:value}))
    }
  
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
        <label className="text-sm">Difficulty</label>
          <Select onValueChange={(value)=>handleInputChange('difficulty',value)}
          defaultValue={userCourseInput?.difficulty}>
            <SelectTrigger className="">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Begineer">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
           <label className="text-sm">Course Duration</label>
           <Select defaultValue={userCourseInput?.duration}
            onValueChange={(value)=>handleInputChange('duration',value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hours</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">More than 3 Hours</SelectItem>

            </SelectContent>
          </Select>
        </div>
        <div>
           <label className="text-sm">Add Video</label>
           <Select  defaultValue={userCourseInput?.displayVideo}
            onValueChange={(value)=>handleInputChange('displayVideo',value)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
              

            </SelectContent>
          </Select>
        </div>
        <div>
           <label className="text-sm">No of Chapters</label>
           <Input type="number"
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(event)=>handleInputChange('noOfChapter',event.target.value)}/>
           
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
