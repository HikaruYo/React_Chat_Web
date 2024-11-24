import React from 'react';
import Userinfo from "./userInfo/Userinfo.jsx";
import Chatlist from "./chatList/Chatlist.jsx";

const List = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Userinfo />
      <Chatlist />
    </div>
  )
}

export default List;