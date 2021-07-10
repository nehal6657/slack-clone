import React from 'react'
import './Message.css';

function Message({message, timestamp, user, userimg}) {
    return (
        <div className="message">
            <img src={userimg} alt="image here"/>
            <div className="message__info">
                <h4> {user} <span className="msg__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message
