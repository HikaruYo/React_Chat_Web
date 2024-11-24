import { useState } from 'react'
import Chat from "./components/chat/Chat.jsx";
import Detail from "./components/detail/Detail.jsx";
import List from "./components/list/List.jsx";

function App() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/src/assets/background.gif')",
      }}
    >
      <div className="h-[100vh] flex items-center justify-center">
        <div
          className="flex w-[90vw] h-[90vh] bg-blue-400 bg-opacity-70 backdrop-blur-sm rounded-md border-2 border-gray-100 border-opacity-25"
        >
          <List />
          <Chat />
          <Detail />
        </div>
      </div>
    </div>
  )
}

export default App
