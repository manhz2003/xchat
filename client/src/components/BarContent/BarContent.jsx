import React, { useState, useEffect } from "react";
import icons from "../../ultils/icons";
const { IoIosSearch } = icons;
import CryptoJS from "crypto-js";

import { getAllUsersWithLatestMessage } from "../../apis/user";

const BarContent = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const userId = localStorage.getItem("userId");
      const secretKey1 = import.meta.env.VITE_ENCRYPTION_KEY_PRO;
      const secretKey2 = import.meta.env.VITE_ENCRYPTION_KEY;
      const response = await getAllUsersWithLatestMessage(userId);
      if (response.status === "success") {
        const decryptedUsers = response.data.map((user) => {
          let originalMessage = user.latestMessage;
          if (user.latestMessage && user.latestMessage !== "null") {
            try {
              let decrypted = CryptoJS.DES.decrypt(
                user.latestMessage,
                secretKey1
              );
              originalMessage = decrypted.toString(CryptoJS.enc.Utf8);

              decrypted = CryptoJS.DES.decrypt(originalMessage, secretKey2);
              originalMessage = decrypted.toString(CryptoJS.enc.Utf8);
            } catch (error) {
              console.error("Error decrypting message:", error);
            }
          }
          return { ...user, latestMessage: originalMessage };
        });
        setUsers(decryptedUsers);
      } else if (response.status === 500) {
        console.log("lỗi server");
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = (id) => {
    setSelectedUser(id);
    localStorage.setItem("userIdDetail", id);
  };

  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col h-full w-[100%]">
        <div className="w-full border-b-[1px] border-custom pb-5">
          <div className="ml-5 mt-5 w-full relative">
            <input
              className="outline-none border-none p-2 pl-14 rounded-[18px] bg-[#232b31] text-[#fff] w-[90%]"
              type="text"
              placeholder="Search ..."
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
        <div className="mt-5 overflow-y-auto user-list w-full">
          <div className="flex flex-col w-full">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className={`flex py-5 cursor-default pl-5 relative transition-all duration-200 ease-in-out w-full ${
                  selectedUser === user.id ? "bg-[#5b6570]" : ""
                }`}
                onClick={() => handleUserClick(user.id)}
              >
                <div className="rounded-[50%] h-[55px] w-[55px]">
                  <img
                    className="rounded-[50%] h-[55px] w-[55px]"
                    src={user.avatar}
                    alt=""
                  />
                </div>
                <div className="ml-5">
                  <div className="text-[#d7d3d3]">{user.fullname}</div>
                  <div className="text-[#8d8f8d] overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[250px] font-thin">
                    {user.latestMessage ||
                      "Xin chào bạn, chúng ta có thể trò truyện với nhau được không ?"}
                  </div>
                </div>
                {selectedUser === user.id ? (
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
