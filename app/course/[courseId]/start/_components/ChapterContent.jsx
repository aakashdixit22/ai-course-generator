// import React from 'react'
// import YouTube from 'react-youtube';
// const opts={
//     height:'390',
//     width:'640',
//     playerVars:{
//         autoplay:0,
//     },
// }

// function ChapterContent({chapter,content}) {
//     console.log(chapter);
//     console.log(content);
//   return (
//     <div className='p-10'>
//         <h2 className='text-2xl font-medium'>{chapter?.chapterName}</h2>
//         <p className='text-gray-500 text-sm'>{chapter?.about}</p>
//         {/* video */}
//         <div className='flex justify-center my-6'>
//         <YouTube  videoId={content?.videoId} opts={opts} />
//         </div>
//         <div className='p-10'>
//             {content?.content?.chapter?.sections?.map((item,index)=>(
//                 <div key={index} className='p-5 bg-sky-100 rounded-md my-5'>
                
//                     <h2 className='text-lg font-medium '>{item.title}</h2>
//                     <p className='text-gray-500 text-sm font-medium'>{item.explanation}</p>
//                     <pre>
//                        <code>{item.code_example.code}</code>
//                     </pre>
                    
                    
//                 </div>
//             ))}
//         </div>
        

//     </div>
//   )
// }

// export default ChapterContent
import React from 'react';
import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};

function ChapterContent({ chapter, content }) {
  console.log(chapter);
  console.log(content);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-medium">{chapter?.chapterName}</h2>
      <p className="text-gray-500 text-sm">{chapter?.about}</p>
      {/* video */}
      <div className="flex justify-center my-6">
        <YouTube videoId={content?.videoId} opts={opts} />
      </div>
      <div className="p-10">
        {content?.content?.chapter?.sections?.map((item, index) => (
          <div key={index} className="p-5 bg-sky-100 rounded-md my-5">
            <h2 className="text-lg font-medium">{item.title}</h2>
            <p className="text-gray-500 text-sm font-medium whitespace-pre-wrap">{item.explanation}</p>
            {item.code_example?.code ? (
                <div className='bg-black text-white rounded-md mt-3'>
              <pre>
                <code>{item.code_example.code}</code>
              </pre>
                </div>
            ) : (
              <p className="text-red-500 text-sm">No code example available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterContent;

