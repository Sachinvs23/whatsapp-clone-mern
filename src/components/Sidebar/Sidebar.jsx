import React, { useState, useEffect } from 'react'
import "./Sidebar.css"
import { Avatar, IconButton } from '@mui/material'
import { useStateValue } from '../ContextApi/StateProvider'
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@mui/icons-material';
import SidebarChat from '../SidebarChat/SidebarChat';
import axios from 'axios';
import Pusher from "pusher-js";

const Sidebar = () => {
    const [{ user }] = useStateValue();
    const [rooms, setRooms] = useState("");

    useEffect(() => {
        axios.get("https://whatsapp-clone-express.onrender.com/all/rooms").then((response) => {
            setRooms(response.data);
        });

    }, []);

    useEffect(()=>{
        const pusher = new Pusher('0a910cc64eb9b7d77a47', {
            cluster: 'ap2'
          });

          const channel = pusher.subscribe('room');
    channel.bind('inserted', function(room) {
      setRooms((prevState)=> [...prevState,room]);
    });
    },[]);


    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user.photoURL} />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlined />
                    <input placeholder='Search or start a new chat' />
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat addnewChat />
                {rooms !==""&& rooms.map((room) => {
                    return <SidebarChat key={room._id} id={room._id} name={room.name} />
                })}
            </div>
        </div>
    )
}

export default Sidebar