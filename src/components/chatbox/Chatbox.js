import React from "react";
import classes from "./Chatbox.module.css";
import Recieved from "./Recieved";
import Sent from "./Sent";
import Aaron from "../data/Aaron.data";
import Eshaan from "../data/Eshaan.data";
import Andrew from "../data/Andrew.data";
import Liza from "../data/Liza.data";
import Jacob from "../data/Jacob.data";
import Mustafa from "../data/Mustafa.data";
import Esky from "../data/Esky.data";
import Kesh from "../data/Kesh.data";
import { useState } from "react";
import ReactScrollableFeed from "react-scrollable-feed";
import ScrollToBottom from 'react-scroll-to-bottom';

const Chatbox = (props) => {
  var nameTag = Aaron;
  const [namerender, setnamerender] = useState("Eshaan");
  // setnamerender(nameTag)
  // {
  //   namerender=nameTag
  // }
  function nameToArray(name) {
    switch (name) {
      case "Eshaan":
        nameTag = Eshaan;
        break;
      case "Andrew":
        nameTag = Andrew;
        break;
      case "Liza":
        nameTag = Liza;
        break;
      case "Jacob":
        nameTag = Jacob;
        break;
      case "Mustafa":
        nameTag = Mustafa;
        break;
      case "Aaron":
        nameTag = Aaron;
        break;
      case "Esky":
        nameTag = Esky;
        break;
      case "Kesh":
        nameTag = Kesh;
        break;
    }
    return nameTag;
  }
  return (
    <ScrollToBottom className={classes.container} >

      <div>
        {nameToArray(props.namegen).map((x) => {
          if (x.type === "sent") {
            return <Sent text={x.text} />;
          } else {
            return <Recieved text={x.text} />;
          }
        })}
      </div>
    </ScrollToBottom>
  );
};

export default Chatbox;
