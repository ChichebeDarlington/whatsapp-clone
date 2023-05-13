import { Avatar } from "@mui/material";
import { useEffect, useState } from "react";
import "./sidebarchat.css";

const SidebarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 450));
  }, []);
  const createChat = () => {
    const roomName = prompt("Please enter name chat");
    if (roomName) {
      // do something
    }
  };

  return !addNewChat ? (
    <div className="sidebar-chat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebar-chat-info">
        <h2>Room name</h2>
        <p>Last chat.......</p>
      </div>
    </div>
  ) : (
    <div className="sidebar-chat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
