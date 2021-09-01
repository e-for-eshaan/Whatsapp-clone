import Head from "./Head";
import classes from "./LeftPane.module.css";
import Search from "./Search";
import Threads from "./Threads";
import dp1 from "./dp1.jpg";
import dp2 from "./dp2.jpg";
import dp3 from "./dp3.jpg";
import dp4 from "./dp4.jpg";
import dp5 from "./dp5.jpg";
import dp6 from "./dp6.jpg";
import dp7 from "./dp7.jpg";


const LeftPane = (props) => {
  const x = "seen";
  return (
    <div className={classes.container}>
      <Head />
      <Search text="Search or start new chat" />
      <hr />
      <div className={classes.chats}>
        <Threads
          address={dp1}
          name="Eshaan"
          time="7:23 PM"
          message="Hey there all"
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <hr />
        <Threads
          address={dp2}
          name="Andrew"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp3}
          name="Liza"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp4}
          name="Jacob"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp5}
          name="Mustafa"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp6}
          name="Aaron"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp7}
          name="Esky"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp3}
          name="Kesh"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp4}
          name="Natalie"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp5}
          name="Timothee"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp6}
          name="Lee"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={dp7}
          name="casy"
          time="7:23 PM"
          message="Hey there "
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <div className={classes.last}></div>
      </div>
    </div>
  );
};

export default LeftPane;
