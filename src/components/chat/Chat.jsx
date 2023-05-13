import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import "./chat.css";

const Chat = () => {
  const [seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("first=>", input);
    setInput("");
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 450));
  }, []);
  return (
    <div className="chat">
      <div className="chat-header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat-header-info">
          <h3>room name</h3>
          <p>last seen ...</p>
        </div>
        <div className="chat-header-right">
          <IconButton>
            <Search />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat-body">
        <p className={`chat-message`}>
          <span className="chat-name">Mazi Madu</span>
          hey guys
          <span className="chat-timestamp">8:53am</span>
        </p>
        <p className={`chat-receiver`}>
          <span className="receiver-name">Malik</span>
          We dey
          <span className="chat-timestamp">8:53am</span>
        </p>
      </div>
      <div className="chat-footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="input your chat"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
};

export default Chat;
