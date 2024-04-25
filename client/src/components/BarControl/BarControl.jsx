import React, { useState, useEffect } from "react";
import icons from "../../ultils/icons";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import { apiLogOut, getAvartarUser, apiUpdateAvatar } from "../../apis/user";

const {
  FaRegUser,
  MdExitToApp,
  IoChatbubbleEllipsesOutline,
  CiSettings,
  MdOutlineLockReset,
  IoIosCloseCircleOutline,
  MdCancel,
  CiSaveDown1,
  RxAvatar,
} = icons;

const BarControl = ({ activeIcon, setActiveIcon }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [avatar, setAvatar] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.toLowerCase() === "/dashboard") {
      setActiveIcon("user");
    }
  }, [location.pathname]);

  const userId = localStorage.getItem("userId");

  const handleLogout = async (event) => {
    if (!window.confirm("Bạn có chắc chắn muốn thoát không?")) {
      return;
    }

    try {
      const response = await apiLogOut({ userId });

      if (response.status === 200) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("userIdDetail");
        toast.success("Đăng xuất thành công");
      } else {
        console.error("An error occurred while logging out:", response);
      }
    } catch (error) {
      console.error("An error occurred while logging out:", error);
    }
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      if (userId) {
        try {
          const response = await getAvartarUser(userId);
          if (response.status === 200) {
            setAvatar(response.data);
          } else {
            console.error(
              "An error occurred while fetching the avatar:",
              response
            );
          }
        } catch (error) {
          console.error("An error occurred while fetching the avatar:", error);
        }
      }
    };

    fetchAvatar();
  }, []);

  const [avatarUrl, setAvatarUrl] = useState("");
  const [checkUrl, setCheckUrl] = useState(false);

  const updateAvatar = async () => {
    if (checkUrl === false) {
      alert("Url không hợp lệ");
    }

    const response = await apiUpdateAvatar({ userId, avatarUrl });

    if (response.status === 200) {
      alert("Cập nhật avatar thành công");
      setIsModalOpen(false);
      window.location.reload();
    } else if (response.status === 400) {
      console.log("lỗi khi cập nhật");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between h-full">
        <div
          className="my-6 rounded-[50%] bg-[#363e47] h-[68px] w-[68px] flex items-center justify-center cursor-pointer"
          onClick={openModal}
        >
          <img
            className="rounded-[50%] h-[68px] w-[68px]"
            src={avatar.avatar}
            alt=""
          />
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              width: "700px",
              height: "550px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "#f2f7f7",
            },
          }}
        >
          <button onClick={closeModal}>
            <IoIosCloseCircleOutline size="30px" />
          </button>

          <div className="p-3 pl-3 pb-[50px] py-[20px]">
            Xin chào ! {avatar.fullname}, bạn có muốn cập nhật avatar không ?
          </div>

          <div className="flex justify-center">
            <div className="rounded-[50%] bg-[#363e47] cursor-pointer h-[200px] w-[200px] mt-3">
              <img
                className="rounded-[50%] h-[200px] w-[200px]"
                src={avatar.avatar}
                alt=""
              />
            </div>
          </div>

          <div className="mt-[44px] flex justify-center ">
            <div className="relative w-full flex justify-center">
              <input
                className="border-none outline-none w-[90%] p-3 rounded-[6px] pl-[50px]"
                placeholder="Nhập url images để cập nhật avatar của bạn"
                type="text"
                name=""
                id=""
                value={avatarUrl}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    setCheckUrl(true);
                    setAvatarUrl(e.target.value);
                  }
                }}
              />
              <div className="absolute left-[44px] top-[11px]">
                <RxAvatar size="26px" />
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-[30px]">
            <Button
              style={{
                width: "100%",
                background: "#fff",
                color: "#000",
              }}
              startIcon={<MdCancel />}
              variant="contained"
              onClick={closeModal}
            >
              Cancel
            </Button>
            <Button
              onClick={updateAvatar}
              style={{
                width: "100%",
                background: "#43515a",
                color: "#fff",
              }}
              startIcon={<CiSaveDown1 color="white" />}
              variant="contained"
            >
              Save
            </Button>
          </div>
        </Modal>

        <div className="flex flex-col items-center justify-between ">
          {location.pathname.toLowerCase() !== "/dashboard" && (
            <div
              className={`my-2 py-4 px-8 cursor-pointer transition-all duration-500 ease-in-out ${
                activeIcon === "chat" ? "bg-[#363e47] relative" : ""
              }`}
              onClick={() => setActiveIcon("chat")}
            >
              {activeIcon === "chat" && (
                <div className="absolute left-0 top-0 h-full bg-[#53d38a] w-1"></div>
              )}
              <IoChatbubbleEllipsesOutline size="27px" color="white" />
            </div>
          )}

          <div
            className={`my-2 py-4 px-8 cursor-pointer transition-all duration-500 ease-in-out ${
              activeIcon === "user" ? "bg-[#363e47] relative" : ""
            }`}
            onClick={() => setActiveIcon("user")}
          >
            {activeIcon === "user" && (
              <div className="absolute left-0 top-0 h-full bg-[#53d38a] w-1"></div>
            )}
            <FaRegUser size="25px" color="white" />
          </div>

          <div
            className="my-2 py-4 px-8 cursor-pointer"
            onClick={() => setShowOptions(!showOptions)}
          >
            <CiSettings size="28px" color="white" />
            {showOptions && (
              <div className="absolute left-4 mt-2 w-48 bg-[#43515a] rounded-lg shadow-lg py-2 z-50">
                <Link to="/reset-password" className="block py-2 text-[#fff]">
                  <div className="flex items-center">
                    <div className="px-2 pl-4">
                      <MdOutlineLockReset />
                    </div>
                    <div>reset password</div>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-auto mb-8 cursor-pointer">
          <Link to="/login" onClick={handleLogout}>
            <MdExitToApp size="27px" color="white" />
          </Link>
        </div>
      </div>
    </>
  );
};
export default BarControl;
