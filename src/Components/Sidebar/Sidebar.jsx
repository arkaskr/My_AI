import {
  CircleQuestionMark,
  History,
  Menu,
  MessageSquare,
  Plus,
  Settings,
} from "lucide-react";
import React, { useContext, useState } from "react";
import { Context } from "../../Context/Context";

const Sidebar = () => {
  const { onSent, previousPromts, setRecentPrompts, newChat } = useContext(Context);

  const [sidebar, setSidebar] = useState(true);

  const loadPrompt=async(prompt)=>{
    setRecentPrompts(prompt)
    await onSent(prompt)
  }

  return (
    <div
      className={`min-h-[100vh] bg-blue-50 p-[25px] ${
        sidebar ? "w-64" : "w-16"
      } transition-all duration-300 flex flex-col justify-between`}
    >
      {/* TOP AREA */}
      <div>
        <Menu
          onClick={() => setSidebar(!sidebar)}
          className="cursor-pointer mb-6 ml-[-5px]"
        />
        {/* NEW CHAT */}
        {sidebar ? (
          <div onClick={()=>newChat()} className="mt-[50px] flex items-center gap-[10px] py-[10px] px-[15px] cursor-pointer text-gray-500 text-sm bg-gray-200 rounded-xl">
            <Plus />
            <p>New Chat</p>
          </div>
        ) : (
          <Plus className="text-gray-600 bg-gray-200 rounded-full p-[5px] ml-[-0.8rem] w-[2.5rem] h-[2.5rem] mt-[50px] cursor-pointer" />
        )}

        {/* RECENT */}
        {sidebar && (
          <div className="flex flex-col">
            <p className="mt-[30px] mb-[20px]">Recent</p>
            {previousPromts?.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} className="flex items-start gap-[10px] p-[10px] pr-[10px] rounded-2xl cursor-pointer text-gray-500 hover:bg-gray-300">
                  <MessageSquare />
                  <p className="flex-1 text-ellipsis whitespace-nowrap overflow-hidden">{item.slice(0,18)}....</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* BOTTOM AREA */}
      <div className="flex flex-col">
        {sidebar ? (
          <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-2xl cursor-pointer text-gray-500 hover:bg-gray-300">
            <CircleQuestionMark />
            <p>Help</p>
          </div>
        ) : (
          <CircleQuestionMark className="text-gray-600 mb-[20px] cursor-pointer" />
        )}

        {sidebar ? (
          <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-2xl cursor-pointer text-gray-500 hover:bg-gray-300">
            <History />
            <p>Activity</p>
          </div>
        ) : (
          <History className="text-gray-600 mb-[20px] cursor-pointer" />
        )}

        {sidebar ? (
          <div className="flex items-center gap-[10px] p-[10px] pr-[40px] rounded-2xl cursor-pointer text-gray-500 hover:bg-gray-300">
            <Settings />
            <p>Settings</p>
          </div>
        ) : (
          <Settings className="text-gray-600 mb-[20px] cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
