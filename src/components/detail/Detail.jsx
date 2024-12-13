import React from 'react';
import Avatar from '../../assets/avatar2.jpg';
import Image from '../../assets/violet.jpg';

const Detail = () => {
  return (
    <div className="flex-1">
      {/* User */}
      <div className="p-3 flex flex-col items-center gap-4 border-b-[1px] border-gray-400">
        <img
          src={ Avatar }
          alt=""
          className="w-20 h-20 rounded-full object-cover"
        />
        <h2>Komi-chan</h2>
        <p>Istriku cintaku sayangku :3</p>
      </div>
      {/* Info */}
      <div className="p-4 flex flex-col gap-5">
        {/* Option */}
        <div>
          {/* Title */}
          <div className="flex items-center justify-between">
            <span>Chat Settings</span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m5 15 7-7 7 7"/>
            </svg>
          </div>
        </div>
        {/* Option */}
        <div>
          {/* Title */}
          <div className="flex items-center justify-between">
            <span>Privacy & Help</span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m5 15 7-7 7 7"/>
            </svg>
          </div>
        </div>
        {/* Option */}
        <div>
          {/* Title */}
          <div className="flex items-center justify-between">
            <span>Shared Photos</span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m19 9-7 7-7-7"/>
            </svg>
          </div>
          {/* Photos */}
          <div className="flex flex-col gap-3 mt-4">
            {/* Photo Item */}
            <div className="flex items-center justify-between">
              {/* Photo Detail*/}
              <div className="flex items-center gap-3">
                <img
                  src={ Image }
                  alt=""
                  className="w-11 h-11 rounded-am object-cover"
                />
                {/* Photo Name */}
                <span className="text-sm text-gray-200 font-light">Thumb_Violet.jpg</span>
              </div>
              {/* Icon */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                      clipRule="evenodd"/>
                <path fillRule="evenodd"
                      d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                      clipRule="evenodd"/>
              </svg>
            </div>
            {/* Photo Item */}
            <div className="flex items-center justify-between">
              {/* Photo Detail*/}
              <div className="flex items-center gap-3">
                <img
                  src={ Image }
                  alt=""
                  className="w-11 h-11 rounded-am object-cover"
                />
                {/* Photo Name */}
                <span className="text-sm text-gray-200 font-light">Thumb_Violet.jpg</span>
              </div>
              {/* Icon */}
              <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M13 11.15V4a1 1 0 1 0-2 0v7.15L8.78 8.374a1 1 0 1 0-1.56 1.25l4 5a1 1 0 0 0 1.56 0l4-5a1 1 0 1 0-1.56-1.25L13 11.15Z"
                      clipRule="evenodd"/>
                <path fillRule="evenodd"
                      d="M9.657 15.874 7.358 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.358l-2.3 2.874a3 3 0 0 1-4.685 0ZM17 16a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H17Z"
                      clipRule="evenodd"/>
              </svg>
            </div>
          </div>
        </div>
        {/* Option */}
        <div>
          {/* Title */}
          <div className="flex items-center justify-between">
            <span>Shared Files</span>
            <svg className="w-6 h-6 text-gray-800 dark:text-white bg-blue-600 p-1 rounded-full cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                 width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="m5 15 7-7 7 7"/>
            </svg>
          </div>
        </div>
        {/* Block Button */}
        <button
          className="p-1 bg-red-500 text-white border-none rounded-md cursor-pointer hover:bg-red-700 transform duration-300"
        >
          Block User
        </button>
        {/* Logout Button */}
        <button className="p-1 bg-blue-600 text-white border-none rounded-md cursor-pointer hover:bg-blue-700 transform duration-300">Logout</button>
      </div>
    </div>
  )
}

export default Detail