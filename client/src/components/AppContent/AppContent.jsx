import React, { useState, useEffect, useRef } from "react";
import icons from "../../ultils/icons";
const { IoMdSend, MdInsertEmoticon, MdAttachFile, FaPhoneAlt, FaVideo } = icons;
import { apiUserDetails, apiChatUser, apiSaveMessage } from "../../apis/chat";

const AppContent = () => {
  const [infoUserStatus, setInfoUserStatus] = useState([]);
  const [messageContent, setMessageContent] = useState("");

  const [messages, setMessages] = useState([]);
  const [userIdDetail, setUserIdDetail] = useState(
    localStorage.getItem("userIdDetail") || ""
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentUserIdDetail = localStorage.getItem("userIdDetail");
      if (currentUserIdDetail !== userIdDetail) {
        setUserIdDetail(currentUserIdDetail);
      }
    }, 0);

    return () => clearInterval(interval);
  }, [userIdDetail]);

  useEffect(() => {
    const fetchMessages = async () => {
      const otherUserId = userIdDetail;
      const response = await apiUserDetails(otherUserId);
      if (response.status === 200) {
        setInfoUserStatus(response.data);
      } else if (response.status === 404) {
        console.log("lỗi");
      }
    };

    fetchMessages();
  }, [userIdDetail]);

  useEffect(() => {
    const fetchMessages = async () => {
      const currentUserId = localStorage.getItem("userId");
      const otherUserId = localStorage.getItem("userIdDetail");
      const response = await apiChatUser({
        currentUserId,
        otherUserId,
      });

      if (response.status === 200) {
        console.log(response);
        setMessages(response.data);
      } else if (response.status === 404) {
        console.log("No messages found");
      }
    };

    fetchMessages();
  }, []);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  const splitIntoLines = (str, maxWordsPerLine) => {
    if (!str) {
      return [];
    }

    const words = str.split(" ");
    const lines = [];
    let line = [];

    words.forEach((word) => {
      if (line.length === maxWordsPerLine) {
        lines.push(line.join(" "));
        line = [];
      }

      line.push(word);
    });

    if (line.length > 0) {
      lines.push(line.join(" "));
    }

    return lines;
  };

  const handleSend = async () => {
    if (messageContent.trim() !== "") {
      const data = {
        senderId: localStorage.getItem("userId"),
        receiverId: localStorage.getItem("userIdDetail"),
        content: messageContent,
      };
      const response = await apiSaveMessage(data);
      if (response.status === 200) {
        console.log("Message sent successfully");
        setMessageContent("");
      } else {
        console.error("An error occurred while sending the message");
      }
    }
  };

  return (
    <>
      <div className="bg-[#f2f7f7] h-full flex flex-col">
        {infoUserStatus.statusUser !== undefined && (
          <div className="w-full border-b-[1px] border-[#e1e0e0] pb-5">
            <div className="flex items-center gap-3 mt-7 ml-6">
              <div className="font-medium text-[22px]">
                {infoUserStatus.fullname}
              </div>
              <div className="flex items-center justify-center gap-2 mt-1">
                <div
                  className={`rounded-[50%] w-2 h-2 bg-[#53d38a]
          ${infoUserStatus.statusUser === 1 ? "bg-[#53d38a]" : "bg-[#e95d5a]"}`}
                ></div>
                <div className="font-light text-[14px] ">
                  {infoUserStatus.statusUser === 1 ? "Online" : "Offline"}
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-[600px] justify-end absolute right-[42px] top-[35px]">
              <div className="cursor-pointer">
                <FaPhoneAlt color="#53d38a" size="20px" />
              </div>
              <div className="cursor-pointer">
                <FaVideo color="#53d38a" size="24px" />
              </div>
            </div>
          </div>
        )}

        <div className="ml-6">
          <div
            ref={messagesContainerRef}
            className="bg-[#f2f7f7] h-[520px] overflow-y-auto flex flex-col "
          >
            {messages.map((message, index) => {
              const lines = splitIntoLines(message.sender.content, 10);
              const storedUserId = localStorage.getItem("userId");

              return (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    String(message.sender.id) === String(storedUserId)
                      ? "justify-end mr-6"
                      : "justify-start ml-6"
                  }`}
                >
                  {String(message.sender.id) !== String(storedUserId) && (
                    <div className="my-6 rounded-[50%] bg-[#363e47] h-[48px] w-[48px] flex items-center justify-center cursor-pointer">
                      <img
                        className="rounded-[50%] h-[48px] w-[48px]"
                        src={message.sender.avatar}
                        alt=""
                      />
                    </div>
                  )}
                  <div>
                    <div
                      className={`font-light text-[16px] p-6 mt-5 ${
                        String(message.sender.id) === String(storedUserId)
                          ? "bg-[#53d38a] text-[white] rounded-b-lg-custom-b"
                          : "bg-[#fff] rounded-b-lg-custom"
                      }`}
                    >
                      {lines.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500 mt-2 ml-4 text-[10px]">
                      {new Date(message.sender.created_at).toLocaleString()}
                    </div>
                  </div>
                  {String(message.sender.id) === String(storedUserId) && (
                    <div className="my-6 rounded-[50%] bg-[#363e47] h-[48px] w-[48px] flex items-center justify-center cursor-pointer">
                      <img
                        className="rounded-[50%] h-[48px] w-[48px]"
                        src={message.sender.avatar}
                        alt=""
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-auto w-full bg-[#fff] h-[80px] relative">
          <textarea
            className="border-none outline-none w-[90%] h-full p-7 pl-[120px] resize-none overflow-auto"
            placeholder="Type something to send ..."
            value={messageContent}
            onChange={(e) => setMessageContent(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <div
            className="absolute top-[32%] right-[40px] cursor-pointer"
            onClick={handleSend}
          >
            <IoMdSend color="#53d38a" size="24px" />
          </div>

          <div className="flex gap-3 absolute top-[35%] left-[22px] ">
            <div className="cursor-pointer">
              <MdInsertEmoticon color="gray" size="26px" />
            </div>
            <div className="cursor-pointer">
              <MdAttachFile color="gray" size="26px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppContent;
