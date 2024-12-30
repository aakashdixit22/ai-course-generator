import React, { use } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HiPencilSquare } from "react-icons/hi2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { DialogClose,DialogFooter } from "@/components/ui/dialog";
import { useEffect } from "react";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";

function EditChapters({course,index,refreshData}) {
    const Chapters=course?.courseOutput?.chapters;
    const[about,setAbout]=useState();
    const[name,setName]=useState();
   
    useEffect(() => {
        setName(Chapters[index].chapterName);
        setAbout(Chapters[index].about);
    }, [course]);
    const UpdateHandler =async()=>{
        Chapters[index].chapterName=name;
        Chapters[index].about=about;
        console.log(course);

         const result = await db.update(CourseList)
                  .set({courseOutput: course.courseOutput})
                  .where(eq(CourseList.id, course.id))
                  .returning({id:CourseList.id});
              console.log(result);

              refreshData(true);
    }
  return (
    <Dialog>
      <DialogTrigger>
        <HiPencilSquare />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            <div>
              <label className="text-sm">Course Name</label>
              <Input
                defaultValue={Chapters[index]?.chapterName}
                onChange={(e) => setName(e?.target.value)}
              />
            </div>
            <div>
              <label className="text-sm">Description</label>
              <Textarea
                className="h-40"
                defaultValue={Chapters[index]?.about}
                onChange={(e) => setAbout(e?.target.value)}
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

export default EditChapters;
