import classes from "./ChatHead.module.css";
import { nametoimg } from "../Functions";

const ChatHead = (props) => {
  let profile = nametoimg(props.text);

  return (
    <div className={classes.container}>
      <img src={profile} alt="image" className={classes.dp} />
      <h4 className={classes.name}>{props.text}</h4>
    </div>
  );
};

export default ChatHead;
