import React, { useState } from 'react';
import Avatar from '../../../assets/avatar2.jpg'

const Chatlist = () => {
  const [ addMode, setAddMode ] = useState(false);

  const Plus = () => {
    return (
      <svg
        className="w-8 h-8 p-1 text-gray-800 dark:text-white cursor-pointer bg-blue-700 bg-opacity-50 rounded-md"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h14m-7 7V5"
        />
      </svg>
    )
  }

  const Minus = () => {
    return (
      <svg
        className="w-8 h-8 p-1 text-gray-800 dark:text-white cursor-pointer bg-blue-700 bg-opacity-50 rounded-md"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 12h14"
        />
      </svg>

    )
  }

  return (
    <div className="flex-1 overflow-scroll">
      {/* Search */}
      <div className="flex items-center gap-3 p-4">
        {/* Search Bar */}
        <div className="flex-1 flex items-center gap-3 p-1 bg-blue-700 bg-opacity-50 rounded-md">
          {/* Search icon */}
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent border-none outline-none text-white flex-1 w-[220px]"
          />
        </div>

        {/* Plus icon */}
        <div
          onClick={() => setAddMode((prev) => !prev)}
        >
          {addMode ? <Minus/> : <Plus/>}
        </div>

      </div>

      {/* Chat, is this real? */}
      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-4 cursor-pointer border-b-2 border-gray-400">
        {/* Another user avatar */}
        <img
          src={Avatar}
          alt=""
          className="w-11 h-11 rounded-full object-cover"
        />
        {/* Text */}
        <div className="flex flex-col">
          {/* Username */}
          <h3 className="font-semibold">Komi-chan</h3>
          {/* Last message */}
          <p className="text-sm font-light">Ohayou darling 🥰🥰</p>
        </div>
      </div>
    </div>
  )
}

export default Chatlist;