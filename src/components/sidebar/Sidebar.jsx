import { Chat, DonutLarge, MoreVert, Search } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
// import db from "../../firebase";
import SidebarChat from "../sidebarchat/SidebarChat";
import "./sidebar.css";

const Sidebar = () => {
  // const [rooms, setRooms] = useState([]);
  // useEffect(() => {
  //   db.collection("rooms").omSnapshot((snapshot) =>
  //     setRooms(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <Avatar />
        <div className="sidebar-header-right">
          <IconButton>
            <DonutLarge className="icon" />
          </IconButton>
          <IconButton>
            <Chat className="icon" />
          </IconButton>
          <IconButton>
            <MoreVert className="icon" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-search">
        <div className="searchbar-search-container">
          <Search />
          <input type="text" placeholder="search or start a new chat" />
        </div>
      </div>
      <div className="sidebar-chat">
        <SidebarChat addNewChat={true} />
        {/* {rooms.map((room) => {
          return <SidebarChat key={room.id} id={room.id} name={room.name} />;
        })} */}
      </div>
    </div>
  );
};

export default Sidebar;
