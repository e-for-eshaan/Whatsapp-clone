import Head from "./Head";
import classes from "./LeftPane.module.css";
import Search from "./Search";
import Threads from "./Threads";
import images from "./../images/images.data";
import data from "../data/data.data";


const LeftPane = (props) => {
  const x = "sent";
  const y = "recieved"
  return (
    <div className={classes.container}>
      <Head />
      <Search text="Search or start new chat" />
      <hr />
      <div className={classes.chats}>
        <Threads
          address={images.dp1}
          name="Eshaan"
          time={data.Eshaan[data.Eshaan.length-1].time}
          message={data.Eshaan[data.Eshaan.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp2}
          name="Andrew"
          time="7:23 PM"
          message={data.Andrew[data.Andrew.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp3}
          name="Liza"
          time="7:23 PM"
          message={data.Liza[data.Liza.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp4}
          name="Jacob"
          time="7:23 PM"
          message={data.Jacob[data.Jacob.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp5}
          name="Mustafa"
          time="7:23 PM"
          message={data.Mustafa[data.Mustafa.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp6}
          name="Aaron"
          time="7:23 PM"
          message={data.Aaron[data.Aaron.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp7}
          name="Esky"
          time="7:23 PM"
          message={data.Esky[data.Esky.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp3}
          name="Kesh"
          time="7:23 PM"
          message={data.Kesh[data.Kesh.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp4}
          name="Natalie"
          time="7:23 PM"
          message={data.Natalie[data.Natalie.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp5}
          name="Timothee"
          time="7:23 PM"
          message={data.Timothee[data.Timothee.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp6}
          name="Lee"
          time="7:23 PM"
          message={data.Lee[data.Lee.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
        <Threads
          address={images.dp7}
          name="casy"
          time="7:23 PM"
          message={data.casy[data.casy.length-1].text}
          notif={x}
          clickfunc={props.clicker}
        />
        <hr />
      </div>
    </div>
  );
};

export default LeftPane;
