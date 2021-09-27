import React from 'react'
import classes from './Chats.module.css'
import ChatHead from './ChatHead'
import SendMessage from './SendMessage'
import Chatbox from './Chatbox'
const Chats = (props) => {
    return (
        <div className={classes.container}>
            <ChatHead text={props.namegen} url='src\components\leftpane\dp1.jpg'/>
            <Chatbox text={props.namegen} func={props.rending}/>
            <SendMessage />
        </div>
    )
}

export default Chats
