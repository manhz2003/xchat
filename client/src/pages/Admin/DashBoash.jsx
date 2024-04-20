import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SideBar, AppContentUser } from "../../components";

const DashBoard = () => {
  return (
    <>
      <div className="flex h-full">
        <div className="bg-gray-800 w-[35%] h-full">
          <SideBar />
        </div>

        <div className="bg-gray-400 w-[65%]">
          <AppContentUser />
        </div>
      </div>
    </>
  );
};
export default DashBoard;
