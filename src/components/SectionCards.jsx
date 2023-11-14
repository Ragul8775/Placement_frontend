import React from 'react';

const SectionCards = ({ sectionData }) => {
  return (
    <>
      {sectionData && Object.entries(sectionData).map(([sectionKey, studentsArray]) => (
        <div key={sectionKey} className="w-64 p-2 bg-stone-200 border border-gray-200 rounded-lg shadow">
          <div className="flex justify-evenly">
            <div className='flex flex-col '>
              <h5 className="mb-2 text-5xl font-semibold text-gray-900 ">{sectionKey}</h5>
              <h4 className='font-semibold text-sm text-gray-700 mt-[-10px]'>Section</h4>
            </div>
            <div className='text-5xl opacity-20 rounded mt-1'>|</div>
            <div className='mt-1 flex flex-col justify-center'>
              {/* Render FA names dynamically */}
              {studentsArray.length >0 &&(
                <h2 className='italic mb-1 text-sm'>
                    <span className='opacity-80 text-gray-700'>FA:</span>{studentsArray[0].fa}
                </h2>
              )}
            </div>
          </div>
          <div>
            <h2 className='text-sm font-semibold text-gray-700 '>Student Details</h2>
            <ul className="max-w-md text-[12px] italic text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                Placed: <span>-</span>
              </li>
              <li>
                Higher Studies: <span>-</span>
              </li>
              <li>
                Entrepreneur: <span>-</span>
              </li>
              <li>
                Not Placed: <span>-</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}

export default SectionCards;
