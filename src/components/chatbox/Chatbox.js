import React from "react";
import classes from "./Chatbox.module.css";
import Recieved from "./Recieved";
import Sent from "./Sent";
import ScrollToBottom from "react-scroll-to-bottom";
import data from "../data/data.json";
const Chatbox = (props) => {
  var chat;
  for (let i = 0; i < data.length; i++) {
    if (props.text == data[i].name) chat = data[i];
  }
  return (
    <ScrollToBottom className={classes.container} initialScrollBehavior="auto">
      <div>
        {chat.msg.map((item) => {
          if (item.type === "sent") {
            return (
              <Sent
                text={item.text}
                time={item.time}
                image={item.image}
                src={item.src}
              />
            );
          } else {
            return (
              <Recieved
                text={item.text}
                time={item.time}
                image={item.image}
                src={item.src}
              />
            );
          }
        })}
      </div>
    </ScrollToBottom>
  );
};

export default Chatbox;
