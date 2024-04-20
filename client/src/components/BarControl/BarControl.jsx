import React, { useState, useEffect } from "react";
import icons from "../../ultils/icons";
import avatar from "../../assets/images/avatar.jpeg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import ButtonFile from "@mui/joy/Button";

import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";

const {
  FaRegUser,
  MdExitToApp,
  IoChatbubbleEllipsesOutline,
  CiSettings,
  MdOutlineLockReset,
  IoIosCloseCircleOutline,
  IoCloudUploadOutline,
  MdCancel,
  CiSaveDown1,
} = icons;

const BarControl = ({ activeIcon, setActiveIcon }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleLogout = (event) => {
    if (!window.confirm("Bạn có chắc chắn muốn thoát không?")) {
      event.preventDefault();
    }
  };

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  const [uploadedImage, setUploadedImage] = useState(avatar);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);
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
            src={avatar}
            alt=""
          />
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            },
            content: {
              width: "700px",
              height: "450px",
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

          <div className="flex justify-center">
            <div className="rounded-[50%] bg-[#363e47] cursor-pointer h-[200px] w-[200px] mt-3">
              <img
                className="rounded-[50%] h-[200px] w-[200px]"
                src={uploadedImage}
                alt=""
              />
            </div>
          </div>

          <div className="mt-[50px] flex justify-center">
            <ButtonFile
              component="label"
              role={undefined}
              tabIndex={-1}
              variant="outlined"
              color="neutral"
              startDecorator={<IoCloudUploadOutline size="24px" />}
            >
              Upload a file
              <VisuallyHiddenInput type="file" onChange={handleImageUpload} />
            </ButtonFile>
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
