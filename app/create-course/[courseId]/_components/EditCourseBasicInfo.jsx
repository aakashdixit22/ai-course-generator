
import React from "react";
import { eq } from "drizzle-orm";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";

import { useEffect } from "react";



function EditCourseBasicInfo({course,refreshData}) {
  const[courseName, setCourseName] = useState('');
  const[description, setDescription] = useState('');
  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      if (!course || !course.courseOutput) {
          setIsLoading(true);
          return;
      }
      setCourseName(course.courseOutput.courseName);
      setDescription(course.courseOutput.description);
      setIsLoading(false);
  }, [course]);

  const UpdateHandler = async() => {
      course.courseOutput.courseName = courseName;
      course.courseOutput.description = description;
      const result = await db.update(CourseList)
          .set({courseOutput: course.courseOutput})
          .where(eq(CourseList.id, course.id))
          .returning({id:CourseList.id});
      console.log(result);

      refreshData(true);
  }

  if (isLoading || !course) {
      return null;
  }
  return (
    <Dialog>
      <DialogTrigger><HiPencilSquare/></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
          <DialogDescription>
          <div>
            <label className='text-sm'>Course Name</label>
            <Input defaultValue={course?.courseOutput?.courseName}
            onChange={(e) => setCourseName(e?.target.value)}
            />
          </div>
            <div>
            <label className='text-sm'>Description</label>
            <Textarea  className='h-40' defaultValue={course?.courseOutput?.description}
            onChange={(e) => setDescription(e?.target.value)}
            />
            </div>
           
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
            <DialogClose>
                <Button onClick={UpdateHandler}>Save</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default EditCourseBasicInfo;
