import React, { useState } from "react";
import avatarTrump from "../../assets/images/trump.jpeg";
import avatarPutin from "../../assets/images/putin.jpeg";
import avatarBiden from "../../assets/images/biden.jpeg";
import avatarZelensky from "../../assets/images/zelensky.jpeg";
import icons from "../../ultils/icons";
const { IoIosSearch } = icons;

const BarContentUser = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "Donald John Trump", avatar: avatarTrump, status: 0 },
    {
      id: 2,
      name: "Vladimir Vladimirovich Putin",
      avatar: avatarPutin,
      status: 1,
    },
    { id: 3, name: "Joseph Robinette Biden", avatar: avatarBiden, status: 0 },
    {
      id: 4,
      name: "Oleksandrovych Zelensky",
      avatar: avatarZelensky,
      status: 1,
    },
    { id: 5, name: "Donald John Trump", avatar: avatarTrump, status: 0 },
    {
      id: 6,
      name: "Vladimir Vladimirovich Putin",
      avatar: avatarPutin,
      status: 1,
    },
    { id: 7, name: "Joseph Robinette Biden", avatar: avatarBiden, status: 0 },
    {
      id: 8,
      name: "Oleksandrovych Zelensky",
      avatar: avatarZelensky,
      status: 1,
    },
    { id: 9, name: "Donald John Trump", avatar: avatarTrump, status: 0 },
    {
      id: 10,
      name: "Vladimir Vladimirovich Putin",
      avatar: avatarPutin,
      status: 1,
    },
    { id: 11, name: "Joseph Robinette Biden", avatar: avatarBiden, status: 0 },
    {
      id: 12,
      name: "Oleksandrovych Zelensky",
      avatar: avatarZelensky,
      status: 1,
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col h-full w-[100%]">
        <div className="ml-5 mt-5 w-full relative">
          <input
            className="outline-none border-none p-2 pl-14 rounded-[18px] bg-[#232b31] text-[#fff] w-[90%]"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="absolute left-4 top-2">
            <IoIosSearch color="white" size="25px" />
          </div>
        </div>
        <div className="mt-5 overflow-y-auto user-list">
          <div className="flex flex-col">
            {filteredUsers.map((user) => (
              <div
                key={user.name}
                className="flex py-5 cursor-default pl-5 relative"
              >
                <div className="rounded-[50%] flex items-center">
                  <img
                    className="rounded-[50%] h-[55px] w-[55px]"
                    src={user.avatar}
                    alt=""
                  />
                  <div className="text-[#d7d3d3] ml-5">{user.name}</div>
                </div>
                <div
                  className={`rounded-[50%] h-[15px] w-[15px] absolute right-5 top-[43%] ${
                    user.status === 0 ? "bg-[#ea5d5a]" : "bg-[#53d38a]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarContentUser;
