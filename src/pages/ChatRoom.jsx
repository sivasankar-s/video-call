import React,  { useEffect, useState } from 'react'
// import { ChatEngine } from 'react-chat-engine';
import axios from 'axios';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography, Box } from '@mui/material';
import { getMessages, postMessage } from '@/actions/auth';
import { format } from 'date-fns';
import '../index.css';
import Avatar from 'react-avatar'


const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user?.data.result.name)
//   let group = "group1";

  const fetchMessages = async () => {
    const response = await getMessages();
    console.log(response.result);
    setMessages(response.result);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    const message = {
      username:  user.data.result.name,
      avatar,
      text: newMessage,
      userType: user.data.result.type,
      group: 'group1',
    };
    console.log(message.userType)
    await postMessage(message);
    setNewMessage('');
    fetchMessages();
  };

  return (
    <Container>
      <Typography variant="h5" gutterBottom className='w-full bg-blue-500 text-white text-center font-bold'>Chat</Typography>
      <List className="chat-list h-[80vh]">
        {messages.map((message) => (
          <ListItem key={message._id} className="chat-message">
            
            <Avatar 
        name={message.username}
        size={45}
        className='w-24 h-24 rounded-full'
        />
          
            <Box className="message-content">
              <ListItemText
                primary={<span className="message-header">{message.username} </span> }
                // {message.userType=="student" ? <span className='text-orange-600 text-sm ml-1'>Student</span> : <span><span className='text-green-600 text-sm ml-1'>Alumni</span></span>}
                secondary={
                  <>
                    <span className="message-text text-lg">{message.text}</span>
                    <span className="message-time">{format(new Date(message.timestamp), 'hh:mm a - MMM dd yyyy')}</span>
                  </>
                }
              />
            </Box>
          </ListItem>
        ))}
      </List>
      <Box display="flex" mt={2} className=' fixed bottom-0 left-0 right-0 justify-center bg-slate-600 p-3 pb-5'>
        
        <input
          label="Message"
          variant="outlined"
          fullWidth
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{ marginRight: 10 }}
          placeholder='Type a message...'
          className='w-3/4 border-2 border-gray-500 p-2'
          
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );



//   return (
//     <ChatEngine
// 			projectID='7d345cf2-58a6-4a0f-a0b9-4bb69d3d8f09'
// 			userName='muthu'
// 			userSecret='123'
// 		/>
//   )
}

export default ChatRoom