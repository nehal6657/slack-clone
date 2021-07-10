import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './ChatInput.css';
import db from '../firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState('');
    const [{ user }] = useStateValue();
    const sendMessage = (e) => {
        e.preventDefault();

        if(channelId){
            console.log("channel id:", channelName);
            console.log(channelId);
            console.log(input);
            console.log(user?.displayName);
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user?.displayName,
                userimg: user?.photoURL,

            })
        }
        setInput('');
    };
    return (
        <div className='chatinput'>
            <form>
                <input 
                type="text" 
                value = {input}
                onChange = {e=>setInput(e.target.value)}
                placeholder={`Message #${channelName?.toLowerCase()}`}/>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
            
        </div>
    )
}

export default ChatInput
