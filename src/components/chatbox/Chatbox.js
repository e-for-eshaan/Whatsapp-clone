import React from "react";
import classes from "./Chatbox.module.css";
import Recieved from "./Recieved";
import Sent from "./Sent";
import data from "../data/data.data";
import ScrollToBottom from "react-scroll-to-bottom";

const Chatbox = (props) => {
  function nameToArray(name) {
    let x;
    switch (name) {
      case "":
        x = data.Kesh;
      case "Eshaan":
        x = data.Eshaan;
        break;
      case "Andrew":
        x = data.Andrew;
        break;
      case "Liza":
        x = data.Liza;
        break;
      case "Jacob":
        x = data.Jacob;
        break;
      case "Mustafa":
        x = data.Mustafa;
        break;
      case "Aaron":
        x = data.Aaron;
        break;
      case "Esky":
        x = data.Esky;
        break;
      case "Kesh":
        x = data.Kesh;
        break;
      case "Natalie":
        x = data.Natalie;
        break;
      case "Timothee":
        x = data.Timothee;
        break;
      case "Lee":
        x = data.Lee;
        break;
      case "casy":
        x = data.casy;

      default:
        break;
    }
    return x;
  }
  let nameTag=nameToArray(props.text);
  return (
    <ScrollToBottom className={classes.container} initialScrollBehavior='auto'>
      <div>
        {nameTag.map((x) => {
          if (x.type === "sent") {
            return <Sent text={x.text} time={x.time} image={x.image} src={x.src}/>;
          } else {
            return <Recieved text={x.text} time={x.time} image={x.image} src={x.src}/>;
          }
        })}
      </div>
    </ScrollToBottom>
  );
};

export default Chatbox;
