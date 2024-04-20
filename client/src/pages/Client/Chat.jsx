import React from "react";
import { useLocation } from "react-router-dom";
import { SideBar, AppContent } from "../../components";

const Chat = () => {
  const location = useLocation();

  return (
    <>
      <div className="flex h-full">
        <div className="bg-gray-800 w-[35%] h-full">
          <SideBar />
        </div>

        <div className="bg-gray-400 w-[65%]">
          <AppContent />
        </div>
      </div>
    </>
  );
};

export default Chat;
