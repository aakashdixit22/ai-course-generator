import React from 'react';
import { HiOutlineClock } from 'react-icons/hi2';
import { HiOutlineCheckCircle } from 'react-icons/hi2'; // Corrected typo in the import
import EditChapters from './EditChapters';

function ChapterList({ course,refreshData }) {
  return (
    <div className="mt-3">
      <h2 className="text-xl font-semibold">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.chapters?.map((chapter, index) => (
          <div
            key={index}
            className="flex gap-4 items-start bg-gray-100 p-4 rounded-lg shadow-sm mb-2 border"
          >
            <div className="bg-primary h-10 w-10 text-white flex items-center justify-center rounded-md font-semibold">
              {index + 1}
            </div>
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{chapter.chapterName}<EditChapters course={course} index={index} refreshData={refreshData}/></h2>
              <p className="text-gray-500 text-sm">{chapter.about}</p>
              <p className="flex items-center gap-2 text-primary text-sm">
                <HiOutlineClock /> {chapter.duration}
              </p>
            </div>
            <HiOutlineCheckCircle className="text-4xl text-primary flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
