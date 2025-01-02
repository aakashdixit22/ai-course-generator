"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { db } from '@/configs/db';
import { and, eq } from 'drizzle-orm';
import { Chapters, CourseList } from '@/configs/schema';
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';

function CourseStart({params}) {
    const [course, setCourse] = useState(null);
    const [selectedChapter, setSelectedChapter] = useState();
    const[chapterContent, setChapterContent] = useState();

    useEffect(() => {
        if (params?.courseId) {
            GetCourse();
        }
    }, [params]);

    const GetCourse = async () => {
        const result = await db.select()
            .from(CourseList)
            .where(eq(CourseList.courseId, params?.courseId));
        setCourse(result[0]);
        GetSelectedChapterContent(0);
    }

    const GetSelectedChapterContent = async (chapterId) => {
        const result = await db.select().from(Chapters)
            .where(and(eq(Chapters.courseId, course?.courseId), eq(Chapters.chapterId, chapterId)));
             setChapterContent(result[0]);
             console.log(result);
    }

    return (
        <div>
            {/* Chapters list side bar */}
            <div className="fixed md:w-72 hidden md:block h-screen bg-blue-50 border-r shadow-sm">
                <h2 className='font-medium text-lg bg-primary p-3 text-white'>
                    {course?.courseOutput?.courseName}
                </h2>
                <div>
                    {course?.courseOutput?.chapters?.map((chapter, index) => (
                        <div 
                            className={`hover:bg-purple-100 cursor-pointer ${
                                selectedChapter?.chapterName ==chapter?.chapterName && 'bg-purple-100'
                            } `}
                            key={index}
                            onClick={() =>{ setSelectedChapter(chapter);
                            GetSelectedChapterContent(index);}}

                        >
                            <ChapterListCard chapter={chapter} index={index} />
                        </div>
                    ))}
                </div>
            </div>

            {/* content div */}
            <div className='md:ml-72'>
                {/* Add content here */}
                <ChapterContent chapter={selectedChapter} content={chapterContent} />  
            </div>
        </div>
    );
}

export default CourseStart;