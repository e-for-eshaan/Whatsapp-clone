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
import Natalie from "../data/Natalie.data";
import Timothee from "../data/Timothee.data";
import Lee from "../data/Lee.data";
import casy from "../data/casy.data";
import ScrollToBottom from "react-scroll-to-bottom";

const Chatbox = (props) => {
  function nameToArray(name) {
    let x;
    switch (name) {
      case "":
        x = Kesh;
      case "Eshaan":
        x = Eshaan;
        break;
      case "Andrew":
        x = Andrew;
        break;
      case "Liza":
        x = Liza;
        break;
      case "Jacob":
        x = Jacob;
        break;
      case "Mustafa":
        x = Mustafa;
        break;
      case "Aaron":
        x = Aaron;
        break;
      case "Esky":
        x = Esky;
        break;
      case "Kesh":
        x = Kesh;
      case "Natalie":
        x = Natalie;
        break;
      case "Timothee":
        x = Timothee;
        break;
      case "Lee":
        x = Lee;
        break;
      case "casy":
        x = casy;

      default:
        break;
    }
    return x;
  }
  let nameTag=nameToArray(props.text);
  return (
    <ScrollToBottom className={classes.container}>
      <div>
        {nameTag.map((x) => {
          if (x.type === "sent") {
            return <Sent text={x.text} time={x.time} />;
          } else {
            return <Recieved text={x.text} time={x.time} />;
          }
        })}
      </div>
    </ScrollToBottom>
  );
};

export default Chatbox;
