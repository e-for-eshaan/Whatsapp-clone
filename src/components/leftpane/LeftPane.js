import Head from "./Head";
import classes from "./LeftPane.module.css";
import Search from "./Search";
import Threads from "./Threads";
import jsondata from "../data/data.json";
import { nametoimg } from "../Functions";
const LeftPane = (props) => {
  const x = "sent";
  const y = "recieved";
  return (
    <div className={classes.container}>
      <Head />
      <Search text="Search or start new chat" />
      <hr />
      <div className={classes.chats}>
        {jsondata.map((item) => {
          return (
            <Threads
              address={nametoimg(item.name)}
              name={item.name}
              time={item.msg[item.msg.length - 1].time}
              message={item.msg[item.msg.length - 1].text}
              notif={x}
              clickfunc={props.clicker}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftPane;
