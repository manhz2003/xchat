import React, { useState } from "react";
import avatarTrump from "../../assets/images/trump.jpeg";
import avatarPutin from "../../assets/images/putin.jpeg";
import avatarBiden from "../../assets/images/biden.jpeg";
import avatarZelensky from "../../assets/images/zelensky.jpeg";
import icons from "../../ultils/icons";
const { IoIosSearch } = icons;

const BarContent = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const users = [
    {
      id: 1,
      name: "Donald John Trump",
      avatar: avatarTrump,
      status: 0,
      latestMessage: "xin chào bạn, tôi có thể làm quen với ...",
    },
    {
      id: 2,
      name: "Vladimir Vladimirovich Putin",
      avatar: avatarPutin,
      status: 1,
      latestMessage: "xin chào bạn, tôi có thể làm quen với ...",
    },
    {
      id: 3,
      name: "Joseph Robinette Biden",
      avatar: avatarBiden,
      status: 0,
      latestMessage: "xin chào bạn, tôi có thể làm quen với ...",
    },
    {
      id: 4,
      name: "Oleksandrovych Zelensky",
      avatar: avatarZelensky,
      status: 1,
      latestMessage: "xin chào bạn, tôi có thể làm quen với ...",
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col h-full w-[100%]">
        <div className="w-full border-b-[1px] border-custom pb-5">
          <div className="ml-5 mt-5 w-full relative">
            <input
              className="outline-none border-none p-2 pl-14 rounded-[18px] bg-[#232b31] text-[#fff] w-[90%]"
              type="text"
              placeholder="Search..."
              name=""
              id=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute left-4 top-2">
              <IoIosSearch color="white" size="25px" />
            </div>
          </div>
        </div>
        <div className="mt-5 overflow-y-auto user-list">
          <div className="flex flex-col">
            {filteredUsers.map((user) => (
              <div
                key={user.name}
                className={`flex py-5 cursor-default pl-5 relative transition-all duration-200 ease-in-out ${
                  selectedUser === user.name ? "bg-[#5b6570]" : ""
                }`}
                onClick={() => handleUserClick(user.name)}
              >
                <div className="rounded-[50%] h-[55px] w-[55px]">
                  <img
                    className="rounded-[50%] h-[55px] w-[55px]"
                    src={user.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-5">
                  <div className="text-[#d7d3d3]">{user.name}</div>
                  <div className="text-[#8d8f8d] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[250px] font-thin">
                    {user.latestMessage}
                  </div>
                </div>
                {selectedUser === user.name ? (
                  <div className="flex items-center justify-center rounded-[30px] h-[15px] w-[15px] bg-[#232b31] text-[#fff] text-[10px] px-5 py-3 absolute right-3 top-3">
                    Now
                  </div>
                ) : (
                  <div
                    className={`rounded-[50%] h-[15px] w-[15px] bg-[#53d38a] absolute right-5 top-[43%] ${
                      user.status === 0 ? "bg-[#ea5d5a]" : "bg-[#53d38a]"
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarContent;
