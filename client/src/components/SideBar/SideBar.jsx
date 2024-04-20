import React, { useState } from "react";
import { BarContent, BarControl, BarContentUser } from "../";

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState("chat");

  return (
    <>
      <div className="flex h-full">
        <div className="bg-[#242b32] w-[18%]">
          <BarControl activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
        </div>

        <div className="bg-[#363e47] w-[82%]">
          {activeIcon === "chat" ? <BarContent /> : <BarContentUser />}
        </div>
      </div>
    </>
  );
};

export default SideBar;
