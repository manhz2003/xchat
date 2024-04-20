import React, { useState, useEffect, useRef } from "react";
import icons from "../../ultils/icons";
import avatar from "../../assets/images/avatar.jpeg";
import avatarTrump from "../../assets/images/trump.jpeg";
const { IoMdSend, MdInsertEmoticon, MdAttachFile, FaPhoneAlt, FaVideo } = icons;

const AppContent = () => {
  const [messages, setMessages] = useState([
    {
      sender: "User2",
      avatar: avatarTrump,
      content: "Hello, how's your day going?",
      time: "06-09 10:00 AM",
    },
    {
      sender: "User1",
      avatar: avatar,
      content: "Hi, my day is going well. How about you?",
      time: "06-09 10:05 AM",
    },
    {
      sender: "User2",
      avatar: avatarTrump,
      content: "I'm doing great, thanks for asking!",
      time: "06-09 10:10 AM",
    },
    {
      sender: "User1",
      avatar: avatar,
      content: "That's good to hear. Do you have any plans for the weekend?",
      time: "06-09 10:15 AM",
    },
    {
      sender: "User2",
      avatar: avatarTrump,
      content: "Not yet. Do you have any suggestions?",
      time: "06-09 10:20 AM",
    },
    {
      sender: "User1",
      avatar: avatar,
      content:
        "How about going for a hike? The weather is supposed to be nice.",
      time: "06-09 10:25 AM",
    },
  ]);

  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  const splitIntoLines = (str, maxWordsPerLine) => {
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

  return (
    <>
      <div className="bg-[#f2f7f7] h-full flex flex-col">
        <div className="w-full border-b-[1px] border-[#e1e0e0] pb-5">
          <div className="flex items-center gap-3 mt-7 ml-6">
            <div className="font-medium text-[22px]">Donald John Trump</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <div className="rounded-[50%] w-2 h-2 bg-[#53d38a] "></div>
              <div className="font-light text-[14px] ">Online</div>
            </div>
            <div className="flex gap-6 w-[600px] justify-end">
              <div className="cursor-pointer">
                <FaPhoneAlt color="#53d38a" size="20px" />
              </div>
              <div className="cursor-pointer">
                <FaVideo color="#53d38a" size="24px" />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-6">
          <div
            ref={messagesContainerRef}
            className="bg-[#f2f7f7] h-[520px] overflow-y-auto flex flex-col "
          >
            {messages.map((message, index) => {
              const lines = splitIntoLines(message.content, 10);
              return (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.sender === "User1"
                      ? "justify-start ml-6"
                      : "justify-end mr-6"
                  }`}
                >
                  {message.sender === "User1" && (
                    <div className="my-6 rounded-[50%] bg-[#363e47] h-[48px] w-[48px] flex items-center justify-center cursor-pointer">
                      <img
                        className="rounded-[50%] h-[48px] w-[48px]"
                        src={message.avatar}
                        alt=""
                      />
                    </div>
                  )}
                  <div>
                    <div
                      className={`font-light text-[16px] p-6 mt-5 ${
                        message.sender === "User1"
                          ? "bg-[#fff] rounded-b-lg-custom"
                          : "bg-[#53d38a] text-[white] rounded-b-lg-custom-b"
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
                      {message.time}
                    </div>
                  </div>
                  {message.sender === "User2" && (
                    <div className="my-6 rounded-[50%] bg-[#363e47] h-[48px] w-[48px] flex items-center justify-center cursor-pointer">
                      <img
                        className="rounded-[50%] h-[48px] w-[48px]"
                        src={message.avatar}
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
          <input
            className="border-none outline-none w-[90%] h-full p-5 pl-[120px]"
            type="text"
            placeholder="Type something to send ..."
          />
          <div className="absolute top-[32%] right-[40px] cursor-pointer">
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
