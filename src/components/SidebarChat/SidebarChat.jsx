import React,{ useState, useEffect } from 'react'
import "./SidebarChat.css"
import { Avatar } from '@mui/material'
import axios from "axios";
import {Link} from 'react-router-dom';

const SidebarChat = ({ addnewChat, name, id }) => {
    const [seed, setSeed] = useState("");

    useEffect(() => {
      setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = async()=> {
        const roomName = prompt("Please enter the name for the group");
        if(roomName){
            try {
                await axios.post("https://whatsapp-clone-express.onrender.com/group/create",{
                    groupName : roomName
                })
            } catch (error) {
                console.log(error);
            }
        }
    }
    
  return  !addnewChat ? ( 
    <Link to={`/rooms/${id}`}>
   <div className='sidebarChat'>
        <Avatar src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${seed}`} />
        <div className='sidebarChat__info'>
            <h2>{name}</h2>
        </div>
    </div>
    </Link>) : (
        <div className='sidebarChat' onClick={createChat}>
            <h2>Add new Chat</h2>
        </div>
    );
}

export default SidebarChat