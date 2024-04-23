import React, { useState, useEffect } from "react";
import icons from "../../ultils/icons";
import { getUser } from "../../apis/user";
const { IoIosSearch } = icons;

const BarContentUser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  const fetchUsers = async (searchTerm) => {
    try {
      const response = await getUser(searchTerm);
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("An error occurred while fetching users:", response);
      }
    } catch (error) {
      throw new Error("An error occurred while fetching users:", error);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers(searchTerm);
        setUsers(data);
        console.log("Users:", data);
      } catch (error) {
        console.error(error);
      }
    };

    loadUsers();
  }, [searchTerm]);

  const filteredUsers = users.filter((user) =>
    user.fullname && searchTerm
      ? user.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      : true
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
                key={user.id}
                className="flex py-5 cursor-default pl-5 relative"
              >
                <div className="rounded-[50%] flex items-center">
                  <img
                    className="rounded-[50%] h-[55px] w-[55px]"
                    src={user.avatar}
                    alt=""
                  />
                  <div className="text-[#d7d3d3] ml-5">{user.fullname}</div>
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
