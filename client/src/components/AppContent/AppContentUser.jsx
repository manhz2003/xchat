import React, { useState, useEffect, useRef } from "react";
import icons from "../../ultils/icons";
import avatar from "../../assets/images/avatar.jpeg";
import avatarTrump from "../../assets/images/trump.jpeg";
import avatarPutin from "../../assets/images/putin.jpeg";
import avatarBiden from "../../assets/images/biden.jpeg";
import avatarZelensky from "../../assets/images/zelensky.jpeg";
const { MdManageAccounts, MdDelete } = icons;

const AppContentUser = () => {
  return (
    <>
      <div className="bg-[#f2f7f7] h-full flex flex-col">
        <div className="w-full border-b-[1px] border-[#e1e0e0] pb-5">
          <div className="flex items-center gap-3 mt-7 ml-6">
            <div className="font-medium text-[22px]">
              Quản lý danh sách user trong hệ thống
            </div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <MdManageAccounts size="28px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppContentUser;
